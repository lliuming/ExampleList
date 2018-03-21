(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/tiledmap/dynamic-tiledmap.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cad2cnE69BPqr+Aejz96TlC', 'dynamic-tiledmap', __filename);
// cases/tiledmap/dynamic-tiledmap.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var url = 'tilemap/tile_iso_offset';
        this.onLoadTileMap(url);
    },
    onLoadTileMap: function onLoadTileMap(url) {
        var _this = this;

        cc.loader.loadRes(url, cc.TiledMapAsset, function (err, tmxAsset) {
            if (err) {
                cc.error(err);
                return;
            }
            _this.onCreateTileMap(tmxAsset);
        });
    },
    onCreateTileMap: function onCreateTileMap(tmxAsset) {
        var node = new cc.Node();
        this.node.addChild(node);
        var tileMap = node.addComponent(cc.TiledMap);
        tileMap.tmxAsset = tmxAsset;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=dynamic-tiledmap.js.map
        
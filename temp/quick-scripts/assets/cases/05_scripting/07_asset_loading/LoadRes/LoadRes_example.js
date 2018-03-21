(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/07_asset_loading/LoadRes/LoadRes_example.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd7c19DG8M5Dp7vHrQu5a8gK', 'LoadRes_example', __filename);
// cases/05_scripting/07_asset_loading/LoadRes/LoadRes_example.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        _url: []
    },

    onLoad: function onLoad() {
        this._url = ["test assets/atlas", "test assets/prefab"];
    },

    loadSpriteFrame: function loadSpriteFrame() {
        var _this = this;

        var url = this._url[0];
        this._releaseResource(url, cc.SpriteAtlas);
        cc.loader.loadRes(url, cc.SpriteAtlas, function (err, atlas) {
            _this._removeAllChildren();
            cc.loader.setAutoRelease(atlas, true);
            var node = new cc.Node();
            _this.content.addChild(node);
            node.position = cc.v2(0, 0);
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = atlas.getSpriteFrame('sheep_run_0');
        });
    },

    loadPrefab: function loadPrefab() {
        var _this2 = this;

        var url = this._url[1];
        this._releaseResource(url, cc.Prefab);
        cc.loader.loadRes(url, cc.Prefab, function (err, prefab) {
            _this2._removeAllChildren();
            cc.loader.setAutoRelease(prefab, true);
            var node = cc.instantiate(prefab);
            _this2.content.addChild(node);
            node.position = cc.v2(0, 0);
        });
    },

    _removeAllChildren: function _removeAllChildren() {
        this.content.removeAllChildren(true);
    },

    _releaseResource: function _releaseResource(url, type) {
        this._removeAllChildren();
        var res = cc.loader.getRes(url, type);
        var all = cc.loader.getDependsRecursively(res);
        cc.loader.release(all);
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
        //# sourceMappingURL=LoadRes_example.js.map
        
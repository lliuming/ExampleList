(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/camera/culling.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4e29ctzt8tATYngmvZr8CAF', 'culling', __filename);
// cases/camera/culling.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        buttons: [cc.Node],
        cameraNode: {
            default: null,
            type: cc.Node
        },
        cameraButtonLabel: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // camera not support canvas
        this.cameraButtonLabel.node.parent.active = cc._renderType !== cc.game.RENDER_TYPE_CANVAS;
        cc.director.setDisplayStats(true);
        var g = this.getComponent(cc.Graphics);
        if (g) {
            g.lineWidth = 10;
            g.fillColor = cc.hexToColor('#ff0000');

            g.moveTo(-20, 0);
            g.lineTo(0, -100);
            g.lineTo(20, 0);
            g.lineTo(0, 100);
            g.close();

            g.stroke();
            g.fill();
        }
        // this.changeCamera();
    },

    spawnGameObject: function spawnGameObject(event, data) {
        cc.log("data : = " + data);
        var node = this.buttons[data | 0];
        node.runAction(cc.sequence(cc.moveBy(3, cc.p(1200, 0)), cc.moveBy(3, cc.p(-1200, 0))));
    },

    onDestroy: function onDestroy() {
        cc.director.setDisplayStats(false);
    },

    changeCamera: function changeCamera() {
        if (this.cameraNode.active) {
            this.cameraNode.active = false;
            this.cameraButtonLabel.string = 'Enable Camera';
        } else {
            this.cameraNode.active = true;
            this.cameraButtonLabel.string = 'Disable Camera';
        }
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
        //# sourceMappingURL=culling.js.map
        
"use strict";
cc._RF.push(module, '6d056HwAmhA7ZTa6tqf8K23', 'moving-objects');
// cases/camera/moving-objects.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tempPrefab: {
            default: null,
            type: cc.Node
        },
        camera: {
            default: null,
            type: cc.Node
        },
        root: {
            default: null,
            type: cc.Node
        },

        moveSpeed: 100,
        nodeCount: 2000,

        _useCamera: true,
        useCamera: {
            get: function get() {
                return this._useCamera;
            },
            set: function set(v) {
                if (this._useCamera === v) return;

                this._useCamera = v;

                if (!CC_EDITOR && this.movingNode) {
                    this.movingNode = v ? this.camera : this.root;
                    this.camera.x = this.root.x = 0;
                    this.moveSpeed = -this.moveSpeed;
                    this.camera.active = !!v;
                }
            }
        },

        _enableCulling: true,
        enableCulling: {
            get: function get() {
                return this._enableCulling;
            },
            set: function set(v) {
                this._enableCulling = v;
                this.setMacroCulling(v);
            }
        }
    },

    onEnable: function onEnable() {
        this._originEnableCulling = cc.macro.ENABLE_CULLING;
    },

    onDisable: function onDisable() {
        this.setMacroCulling(this._originEnableCulling);
    },

    // use this for initialization
    onLoad: function onLoad() {
        console.log("aaaa");
        for (var i = 0; i < this.nodeCount; i++) {
            var node = cc.instantiate(this.tempPrefab);
            node.x = (Math.random() - 0.5) * 960;
            node.y = (Math.random() - 0.5) * 640;
            node.parent = this.root;
        }

        this.movingNode = this._useCamera ? this.camera : this.root;

        this.setMacroCulling(this._enableCulling);
    },

    setMacroCulling: function setMacroCulling(enable) {
        if (cc.macro.ENABLE_CULLING === enable || CC_JSB) return;

        cc.macro.ENABLE_CULLING = enable;
        cc.director.getScene()._sgNode._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.cullingDirty);
        cc.renderer.childrenOrderDirty = true;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.movingNode.x += this.moveSpeed * dt;
        if (this.moveSpeed > 0 && this.movingNode.x > 900 || this.moveSpeed < 0 && this.movingNode.x < -900) {
            this.moveSpeed *= -1;
        }
    },

    useCameraChanged: function useCameraChanged(toggle) {
        this.useCamera = toggle.isChecked;
    },

    enableCullingChanged: function enableCullingChanged(toggle) {
        this.enableCulling = toggle.isChecked;
    }
});

cc._RF.pop();
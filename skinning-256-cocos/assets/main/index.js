System.register("chunks:///_virtual/main",["./SkinningSpawn.ts","./Spawn.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SkinningSpawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,r,t,i,a,o,l,p,s,c,u,f,h;return{setters:[function(n){e=n.applyDecoratedDescriptor,r=n.inheritsLoose,t=n.createForOfIteratorHelperLoose,i=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){o=n.cclegacy,l=n._decorator,p=n.Prefab,s=n.instantiate,c=n.SkeletalAnimation,u=n.math,f=n.profiler,h=n.Component}],execute:function(){var d,m,b,g,S,v;o._RF.push({},"4c48f9S0+5IJrxLMpL6MKLn","SkinningSpawn",void 0);var y=l.ccclass,w=l.property;n("SkinningSpawn",(d=y("SkinningSpawn"),m=w(p),d((S=e((g=function(n){function e(){for(var e,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return e=n.call.apply(n,[this].concat(t))||this,i(e,"prefab",S,a(e)),i(e,"num",v,a(e)),e}return r(e,n),e.prototype.start=function(){for(var n=0;n<this.num;n++){var e=s(this.prefab);e.setPosition(6*Math.random()-3,0,12*Math.random()-6);for(var r,i=e.getComponent(c),a=Math.round(u.random()*(i.clips.length-1)),o=t(i.clips);!(r=o()).done;){var l=r.value;if(0==a){i.defaultClip=l;break}a--}this.node.addChild(e)}f.showStats()},e}(h)).prototype,"prefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(g.prototype,"num",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=g))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/Spawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,r,a,o,s,l,u,p,c,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Vec3,l=e.Quat,u=e.Prefab,p=e.Label,c=e.instantiate,f=e.profiler,h=e.Component}],execute:function(){var b,d,w,m,y,v,g,S;a._RF.push({},"9aa82S7jBZHp6iSWkWZVs3W","Spawn",void 0);var _=o.ccclass,z=o.property;new s,new l,new l,new s(0,0,.05),e("Spawn",(b=_("Spawn"),d=z(u),w=z(p),b((v=t((y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"prefab",v,r(t)),i(t,"num",g,r(t)),i(t,"label",S,r(t)),t._transforms=void 0,t._destinations=void 0,t}return n(t,e),t.prototype.start=function(){for(var e=new Array(this.num),t=new Array(this.num),n=0;n<this.num;n++){var i=c(this.prefab);i.setPosition(6*Math.random()-3,0,12*Math.random()-6),this.node.addChild(i),e[n]=i,t[n]=new s}this._transforms=e,this._destinations=t,this.label.string=""+globalThis.devicePixelRatio,f.showStats()},t}(h)).prototype,"prefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(y.prototype,"num",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),S=t(y.prototype,"label",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
System.register("chunks:///_virtual/main",["./SkinningSpawn.ts","./Spawn.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SkinningSpawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,r,t,i,a,o,l,p,s,c,u,f,h;return{setters:[function(n){e=n.applyDecoratedDescriptor,r=n.inheritsLoose,t=n.createForOfIteratorHelperLoose,i=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){o=n.cclegacy,l=n._decorator,p=n.Prefab,s=n.instantiate,c=n.SkeletalAnimation,u=n.math,f=n.profiler,h=n.Component}],execute:function(){var d,m,b,g,S,v;o._RF.push({},"4c48f9S0+5IJrxLMpL6MKLn","SkinningSpawn",void 0);var y=l.ccclass,w=l.property;n("SkinningSpawn",(d=y("SkinningSpawn"),m=w(p),d((S=e((g=function(n){function e(){for(var e,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return e=n.call.apply(n,[this].concat(t))||this,i(e,"prefab",S,a(e)),i(e,"num",v,a(e)),e}return r(e,n),e.prototype.start=function(){for(var n=0;n<this.num;n++){var e=s(this.prefab);e.setPosition(6*Math.random()-3,0,12*Math.random()-6);for(var r,i=e.getComponent(c),a=Math.round(u.random()*(i.clips.length-1)),o=t(i.clips);!(r=o()).done;){var l=r.value;if(0==a){i.defaultClip=l;break}a--}this.node.addChild(e)}f.showStats()},e}(h)).prototype,"prefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(g.prototype,"num",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),b=g))||b));o._RF.pop()}}}));

System.register("chunks:///_virtual/Spawn.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,n,i,e,a,o,s,p,u,l,c,f;return{setters:[function(t){r=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.Vec3,p=t.Quat,u=t.Prefab,l=t.instantiate,c=t.profiler,f=t.Component}],execute:function(){var h,d,m,w,v,b;a._RF.push({},"9aa82S7jBZHp6iSWkWZVs3W","Spawn",void 0);var y=o.ccclass,_=o.property,S=new s,g=new p,z=new p,A=new s(0,0,.05);t("Spawn",(h=y("Spawn"),d=_(u),h((v=r((w=function(t){function r(){for(var r,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a))||this,i(r,"prefab",v,e(r)),i(r,"num",b,e(r)),r._transforms=void 0,r._destinations=void 0,r}n(r,t);var a=r.prototype;return a.start=function(){for(var t=new Array(this.num),r=new Array(this.num),n=0;n<this.num;n++){var i=l(this.prefab);this.node.addChild(i),t[n]=i,r[n]=new s}this._transforms=t,this._destinations=r,c.showStats()},a.update=function(t){for(var r=0;r<this.num;r++){var n=this._transforms[r],i=this._destinations[r],e=s.subtract(S,i,n.position);if(e.length()<1)i.set(6*Math.random()-3,0,12*Math.random()-6);else{s.normalize(e,e);var a=p.fromViewUp(g,e);n.rotation=p.slerp(z,n.rotation,a,.05);var o=s.transformQuat(S,A,n.rotation);s.add(o,n.position,o),n.position=o}}},r}(f)).prototype,"prefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=r(w.prototype,"num",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=w))||m));a._RF.pop()}}}));

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
(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["forum/app"];var o=t.n(e);const r=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/components/CommentPost"];var a=t.n(n);const c=flarum.core.compat["forum/components/ComposerPostPreview"];var i=t.n(c);o().initializers.add("fof/bbcode-tabs",(function(){var t=0,e=function(){this.$(".tabs").each((function(e,o){var r=$(o);if(!r.find('input[type="radio"][name]').length){var n=r.find('> .tab > input[type="radio"]');if(n.length){var a=r.find(".tab"),c=t++;n.attr("name","tab-group-"+c),n.is("[checked]")||n[0].setAttribute("checked","checked"),a.each((function(t,e){var o=$(e),r="tab-"+c+"-"+ ++t;o.find('input[type="radio"]').attr("id",r),o.find("label").attr("for",r)}))}}}))};(0,r.extend)(a().prototype,["oncreate","onupdate"],e),(0,r.extend)(i().prototype,"oncreate",(function(){var t=this;(0,r.extend)(this.attrs,"surround",(function(){return e.call(t)}))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map
"use strict";(self["webpackChunktest1"]=self["webpackChunktest1"]||[]).push([[763],{2763:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=s(3396),n=s(7139);function i(t,e,s,i,l,c){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,(0,n.zw)(t.listItems),1),(0,a._)("div",null,"title: "+(0,n.zw)(t.listItems.title),1)],64)}var l={data:()=>({listItems:[]}),methods:{getActId(){return this.$route.params.id},async getData(t){console.log(`第${t}個產品`);const e=await fetch(`https://btktech.com.tw/polyacetal/del/${t}`),s=await e.json();this.listItems=s}},mounted(){this.getData(this.getActId())}},c=s(89);const u=(0,c.Z)(l,[["render",i]]);var r=u}}]);
//# sourceMappingURL=763.89e211da.js.map
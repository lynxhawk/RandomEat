(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[1203],{88051:function(t,n,e){var i=e(60263);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=e(56).Z;s("d4dbe280",i,!0,{sourceMap:!1,shadowMode:!1})},52534:function(t,n,e){var i=e(88256);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=e(56).Z;s("526d7cf4",i,!0,{sourceMap:!1,shadowMode:!1})},1203:function(t,n,e){"use strict";var i;e.d(n,{Z:function(){return T}});var s,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:(t.selectable?"_select ":"")+"_root",attrs:{id:"_root"}},[t.nodes[0]?e("node",{attrs:{childs:t.nodes,opts:[t.lazyLoad,t.loadingImg,t.errorImg,t.showImgMenu]}}):t._t("default")],2)},r=[],o=(e(57658),e(41539),e(91058),e(74916),e(15306),e(92222),{props:{content:String,copyLink:{type:Boolean,default:uni.$u.props.parse.copyLink},domain:String,errorImg:{type:String,default:uni.$u.props.parse.errorImg},lazyLoad:{type:Boolean,default:uni.$u.props.parse.lazyLoad},loadingImg:{type:String,default:uni.$u.props.parse.loadingImg},pauseVideo:{type:Boolean,default:uni.$u.props.parse.pauseVideo},previewImg:{type:Boolean,default:uni.$u.props.parse.previewImg},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:uni.$u.props.parse.setTitle},showImgMenu:{type:Boolean,default:uni.$u.props.parse.showImgMenu},tagStyle:Object,useAnchor:null}}),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:"_"+t.name+" "+t.attrs.class,style:t.attrs.style,attrs:{id:t.attrs.id}},[t._l(t.childs,(function(n,i){return["img"==n.name&&(t.opts[1]&&!t.ctrl[i]||t.ctrl[i]<0)?e("v-uni-image",{key:i+"_0",staticClass:"_img",style:n.attrs.style,attrs:{src:t.ctrl[i]<0?t.opts[2]:t.opts[1],mode:"widthFix"}}):t._e(),"img"==n.name?e("img",{key:i+"_1",class:"_img "+n.attrs.class,style:(-1==t.ctrl[i]?"display:none;":"")+n.attrs.style,attrs:{id:n.attrs.id,src:n.attrs.src||(t.ctrl.load?n.attrs["data-src"]:""),"data-i":i},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLoad.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)},longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLongTap.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.imgTap.apply(void 0,arguments)}}}):"text"==n.type?e("v-uni-text",{attrs:{decode:!0}},[t._v(t._s(n.text))]):"br"==n.name?e("v-uni-text",[t._v("\\n")]):"a"==n.name?e("v-uni-view",{class:(n.attrs.href?"_a ":"")+n.attrs.class,style:"display:inline;"+n.attrs.style,attrs:{id:n.attrs.id,"hover-class":"_hover","data-i":i},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.linkTap.apply(void 0,arguments)}}},[e("node",{staticStyle:{display:"inherit"},attrs:{name:"span",childs:n.children,opts:t.opts}})],1):"video"==n.name?e("v-uni-video",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,autoplay:n.attrs.autoplay,controls:n.attrs.controls,loop:n.attrs.loop,muted:n.attrs.muted,poster:n.attrs.poster,src:n.src[t.ctrl[i]||0],"data-i":i},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"iframe"==n.name?e("iframe",{style:n.attrs.style,attrs:{allowfullscreen:n.attrs.allowfullscreen,frameborder:n.attrs.frameborder,src:n.attrs.src}}):"embed"==n.name?e("embed",{style:n.attrs.style,attrs:{src:n.attrs.src}}):"audio"==n.name?e("v-uni-audio",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,author:n.attrs.author,controls:n.attrs.controls,loop:n.attrs.loop,name:n.attrs.name,poster:n.attrs.poster,src:n.src[t.ctrl[i]||0],"data-i":i},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"table"==n.name&&n.c||"li"==n.name?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id}},["li"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,i){return e("v-uni-view",{key:i,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},["td"==n.name||"th"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,i){return["td"==n.name||"th"==n.name?e("v-uni-view",{key:i+"_0",class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1):e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},t._l(n.children,(function(n,i){return e("v-uni-view",{key:i,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1)})),1)]}))],2)}))],2):t.handler.use(n)?e("v-uni-rich-text",{style:n.f,attrs:{id:n.attrs.id,nodes:[n]}}):2==n.c?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.f+";"+n.attrs.style,attrs:{id:n.attrs.id}},t._l(n.children,(function(n,i){return e("node",{key:i,style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})})),1):e("node",{style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})]}))],2)},c=[],h=(e(26699),e(32023),{name:"node",data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:y},mounted:function(){var t=this;for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);if(this.opts[0]){for(var n=this.childs.length;n--;)if("img"==this.childs[n].name)break;-1!=n&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(function(n){n.intersectionRatio&&(t.$set(t.ctrl,"load",1),t.observer.disconnect())})))}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.root.pauseVideo){for(var n=!1,e=t.target.id,i=this.root._videos.length;i--;)this.root._videos[i].id==e?n=!0:this.root._videos[i].pause();if(!n){var s=uni.createVideoContext(e,this);s.id=e,this.root._videos.push(s)}}},imgTap:function(t){var n=this.childs[t.currentTarget.dataset.i];if(n.a)return this.linkTap(n.a);n.attrs.ignore||(n.attrs.src=n.attrs.src||n.attrs["data-src"],this.root.$emit("imgTap",n.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var n=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[n]||-1==this.ctrl[n])&&this.$set(this.ctrl,n,1)},linkTap:function(t){var n=t.currentTarget?this.childs[t.currentTarget.dataset.i].attrs:t,e=n.href;this.root.$emit("linkTap",n),e&&("#"==e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.includes("://")?this.root.copyLink&&window.open(e):uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e,fail:function(){}})}}))},mediaError:function(t){var n=t.currentTarget.dataset.i,e=this.childs[n];if("video"==e.name||"audio"==e.name){var i=(this.ctrl[n]||0)+1;if(i>e.src.length&&(i=0),i<e.src.length)return this.$set(this.ctrl,n,i)}else"img"==e.name&&this.opts[2]&&this.$set(this.ctrl,n,-1);this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}}),d=h,p=(e(88051),e(69453));function u(t){(t.options.wxs||(t.options.wxs={}))["handler"]=function(t){var n={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};return t.exports={use:function(t){return!n[t.name]&&-1==(t.attrs.style||"").indexOf("display:inline")&&!t.c}},t.exports}({exports:{}})}var f,m=u,g=(0,p.Z)(d,l,c,!1,null,"143368c6",null,!1,s,f);"function"===typeof m&&m(g);var v,y=g.exports,b=[],x=e(79456),_={name:"mp-html",data:function(){return{nodes:[]}},mixins:[o],components:{node:y},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=b.length;t--;)this.plugins.push(new b[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,n,e){t&&n&&e&&(this._in={page:t,selector:n,scrollTop:e})},navigateTo:function(t,n){var e=this;return new Promise((function(i,s){if(!e.useAnchor)return s("Anchor is disabled");n=n||parseInt(e.useAnchor)||0;var a=" ",r=uni.createSelectorQuery().in(e._in?e._in.page:e).select((e._in?e._in.selector:"._root")+(t?"".concat(a,"#").concat(t):"")).boundingClientRect();e._in?r.select(e._in.selector).scrollOffset().select(e._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(t){if(!t[0])return s("Label not found");var a=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;e._in?e._in.page[e._in.scrollTop]=a:uni.pageScrollTo({scrollTop:a,duration:300}),i()}))}))},getText:function(){var t="";return function n(e){for(var i=0;i<e.length;i++){var s=e[i];if("text"==s.type)t+=s.text.replace(/&amp;/g,"&");else if("br"==s.name)t+="\n";else{var a="p"==s.name||"div"==s.name||"tr"==s.name||"li"==s.name||"h"==s.name[0]&&s.name[1]>"0"&&s.name[1]<"7";a&&t&&"\n"!=t[t.length-1]&&(t+="\n"),s.children&&n(s.children),a&&"\n"!=t[t.length-1]?t+="\n":"td"!=s.name&&"th"!=s.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,e){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):e("Root label not found")}))}))},setContent:function(t,n){var e=this;n&&this.imgList||(this.imgList=[]);var i,s=new x(this).parse(t);this.$set(this,"nodes",n?(this.nodes||[]).concat(s):s),this._videos=[],this.$nextTick((function(){e._hook("onLoad"),e.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){e.getRect().then((function(t){t.height==i&&(e.$emit("ready",t),clearInterval(e._timer)),i=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var n=b.length;n--;)this.plugins[n][t]&&this.plugins[n][t]()}}},w=_,k=(e(52534),(0,p.Z)(w,a,r,!1,null,"55ff4e76",null,!1,i,v)),T=k.exports},60263:function(t,n,e){"use strict";e.r(n);var i=e(43481),s=e.n(i),a=e(2400),r=e.n(a),o=r()(s());o.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* a 标签默认效果 */._a[data-v-143368c6]{padding:1.5px 0 1.5px 0;color:#366092;word-break:break-all}\n/* a 标签点击态效果 */._hover[data-v-143368c6]{text-decoration:underline;opacity:.7}\n/* 图片默认效果 */._img[data-v-143368c6]{max-width:100%;-webkit-touch-callout:none}\n/* 内部样式 */._b[data-v-143368c6],\n._strong[data-v-143368c6]{font-weight:700}._code[data-v-143368c6]{font-family:monospace}._del[data-v-143368c6]{text-decoration:line-through}._em[data-v-143368c6],\n._i[data-v-143368c6]{font-style:italic}._h1[data-v-143368c6]{font-size:2em}._h2[data-v-143368c6]{font-size:1.5em}._h3[data-v-143368c6]{font-size:1.17em}._h5[data-v-143368c6]{font-size:.83em}._h6[data-v-143368c6]{font-size:.67em}._h1[data-v-143368c6],\n._h2[data-v-143368c6],\n._h3[data-v-143368c6],\n._h4[data-v-143368c6],\n._h5[data-v-143368c6],\n._h6[data-v-143368c6]{display:block;font-weight:700}._image[data-v-143368c6]{height:1px}._ins[data-v-143368c6]{text-decoration:underline}._li[data-v-143368c6]{display:list-item}._ol[data-v-143368c6]{list-style-type:decimal}._ol[data-v-143368c6],\n._ul[data-v-143368c6]{display:block;padding-left:40px;margin:1em 0}._q[data-v-143368c6]::before{content:'\"'}._q[data-v-143368c6]::after{content:'\"'}._sub[data-v-143368c6]{font-size:smaller;vertical-align:sub}._sup[data-v-143368c6]{font-size:smaller;vertical-align:super}._thead[data-v-143368c6],\n._tbody[data-v-143368c6],\n._tfoot[data-v-143368c6]{display:table-row-group}._tr[data-v-143368c6]{display:table-row}._td[data-v-143368c6],\n._th[data-v-143368c6]{display:table-cell;vertical-align:middle}._th[data-v-143368c6]{font-weight:700;text-align:center}._ul[data-v-143368c6]{list-style-type:disc}._ul ._ul[data-v-143368c6]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-143368c6]{list-style-type:square}._abbr[data-v-143368c6],\n._b[data-v-143368c6],\n._code[data-v-143368c6],\n._del[data-v-143368c6],\n._em[data-v-143368c6],\n._i[data-v-143368c6],\n._ins[data-v-143368c6],\n._label[data-v-143368c6],\n._q[data-v-143368c6],\n._span[data-v-143368c6],\n._strong[data-v-143368c6],\n._sub[data-v-143368c6],\n._sup[data-v-143368c6]{display:inline}\n\n",""]),n["default"]=o},88256:function(t,n,e){"use strict";e.r(n);var i=e(43481),s=e.n(i),a=e(2400),r=e.n(a),o=r()(s());o.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 根节点样式 */._root[data-v-55ff4e76]{overflow:auto;-webkit-overflow-scrolling:touch}\n/* 长按复制 */._select[data-v-55ff4e76]{-webkit-user-select:text;user-select:text}\n",""]),n["default"]=o},79456:function(t,n,e){"use strict";var i=e(78837)["default"];e(82772),e(91058),e(92222),e(26699),e(32023),e(54678),e(73210),e(94986),e(74916),e(15306),e(57658),e(96647),e(41539),e(39714),e(40561);var s={trustTags:c("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:c("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:c("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:c("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}},a=uni.getSystemInfoSync(),r=a.windowWidth,o=c(" ,\r,\n,\t,\f"),l=0;function c(t){for(var n=Object.create(null),e=t.split(","),i=e.length;i--;)n[e[i]]=!0;return n}function h(t,n){var e=t.indexOf("&");while(-1!=e){var i=t.indexOf(";",e+3),a=void 0;if(-1==i)break;"#"==t[e+1]?(a=parseInt(("x"==t[e+2]?"0":"")+t.substring(e+2,i)),isNaN(a)||(t=t.substr(0,e)+String.fromCharCode(a)+t.substr(i+1))):(a=t.substring(e+1,i),(s.entities[a]||"amp"==a&&n)&&(t=t.substr(0,e)+(s.entities[a]||"&")+t.substr(i+1))),e=t.indexOf("&",e+1)}return t}function d(t){this.options=t||{},this.tagStyle=Object.assign(s.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[]}function p(t){this.handler=t}s.ignoreTags.iframe=void 0,s.trustTags.iframe=!0,s.ignoreTags.embed=void 0,s.trustTags.embed=!0,d.prototype.parse=function(t){for(var n=this.plugins.length;n--;)this.plugins[n].onUpdate&&(t=this.plugins[n].onUpdate(t,s)||t);new p(this).parse(t);while(this.stack.length)this.popNode();return this.nodes},d.prototype.expose=function(){for(var t=this.stack.length;t--;){var n=this.stack[t];if("a"==n.name||n.c)return;n.c=1}},d.prototype.hook=function(t){for(var n=this.plugins.length;n--;)if(this.plugins[n].onParse&&0==this.plugins[n].onParse(t,this))return!1;return!0},d.prototype.getUrl=function(t){var n=this.options.domain;return"/"==t[0]?"/"==t[1]?t="".concat(n?n.split("://")[0]:"http",":").concat(t):n&&(t=n+t):!n||t.includes("data:")||t.includes("://")||(t="".concat(n,"/").concat(t)),t},d.prototype.parseStyle=function(t){var n=t.attrs,e=(this.tagStyle[t.name]||"").split(";").concat((n.style||"").split(";")),i={},s="";n.id&&(this.options.useAnchor?this.expose():"img"!=t.name&&"a"!=t.name&&"video"!=t.name&&"audio"!=t.name&&(n.id=void 0)),n.width&&(i.width=parseFloat(n.width)+(n.width.includes("%")?"%":"px"),n.width=void 0),n.height&&(i.height=parseFloat(n.height)+(n.height.includes("%")?"%":"px"),n.height=void 0);for(var a=0,l=e.length;a<l;a++){var c=e[a].split(":");if(!(c.length<2)){var h=c.shift().trim().toLowerCase(),d=c.join(":").trim();if("-"==d[0]&&d.lastIndexOf("-")>0||d.includes("safe"))s+=";".concat(h,":").concat(d);else if(!i[h]||d.includes("import")||!i[h].includes("import")){if(d.includes("url")){var p=d.indexOf("(")+1;if(p){while('"'==d[p]||"'"==d[p]||o[d[p]])p++;d=d.substr(0,p)+this.getUrl(d.substr(p))}}else d.includes("rpx")&&(d=d.replace(/[0-9.]+\s*rpx/g,(function(t){return"".concat(parseFloat(t)*r/750,"px")})));i[h]=d}}}return t.attrs.style=s,i},d.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"==this.tagName&&(this.xml=!0)},d.prototype.onAttrName=function(t){t=this.xml?t:t.toLowerCase(),"data-"==t.substr(0,5)?"data-src"!=t||this.attrs.src?"img"==this.tagName||"a"==this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},d.prototype.onAttrVal=function(t){var n=this.attrName||"";"style"==n||"href"==n?this.attrs[n]=h(t,!0):n.includes("src")?this.attrs[n]=this.getUrl(h(t,!0)):n&&(this.attrs[n]=t)},d.prototype.onOpenTag=function(t){var n=Object.create(null);n.name=this.tagName,n.attrs=this.attrs,this.attrs=Object.create(null);var e=n.attrs,i=this.stack[this.stack.length-1],a=i?i.children:this.nodes,o=this.xml?t:s.voidTags[n.name];if("embed"==n.name&&this.expose(),"video"!=n.name&&"audio"!=n.name||("video"!=n.name||e.id||(e.id="v".concat(l++)),e.controls||e.autoplay||(e.controls="T"),n.src=[],e.src&&(n.src.push(e.src),e.src=void 0),this.expose()),o){if(!this.hook(n)||s.ignoreTags[n.name])return void("base"!=n.name||this.options.domain?"source"==n.name&&i&&("video"==i.name||"audio"==i.name)&&e.src&&i.src.push(e.src):this.options.domain=e.href);var c=this.parseStyle(n);if("img"==n.name){if(e.src&&(e.src.includes("webp")&&(n.webp="T"),e.src.includes("data:")&&!e["original-src"]&&(e.ignore="T"),!e.ignore||n.webp||e.src.includes("cloud://"))){for(var h=this.stack.length;h--;){var d=this.stack[h];if("a"==d.name){n.a=d.attrs;break}d.c=1}e.i=this.imgList.length.toString();var p=e["original-src"]||e.src;this.imgList.push(p),this.options.lazyLoad&&(e["data-src"]=e.src,e.src=void 0)}"inline"==c.display&&(c.display=""),e.ignore&&(c["max-width"]=c["max-width"]||"100%",e.style+=";-webkit-touch-callout:none"),parseInt(c.width)>r&&(c.height=void 0),c.width&&(c.width.includes("auto")?c.width="":(n.w="T",c.height&&!c.height.includes("auto")&&(n.h="T")))}else if("svg"==n.name)return a.push(n),this.stack.push(n),void this.popNode();for(var u in c)c[u]&&(e.style+=";".concat(u,":").concat(c[u].replace(" !important","")));e.style=e.style.substr(1)||void 0}else("pre"==n.name||(e.style||"").includes("white-space")&&e.style.includes("pre"))&&(this.pre=n.pre=!0),n.children=[],this.stack.push(n);a.push(n)},d.prototype.onCloseTag=function(t){var n;for(t=this.xml?t:t.toLowerCase(),n=this.stack.length;n--;)if(this.stack[n].name==t)break;if(-1!=n)while(this.stack.length>n)this.popNode();else if("p"==t||"br"==t){var e=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;e.push({name:t,attrs:{}})}},d.prototype.popNode=function(){var t=this.stack.pop(),n=t.attrs,e=t.children,a=this.stack[this.stack.length-1],o=a?a.children:this.nodes;if(!this.hook(t)||s.ignoreTags[t.name])return"title"==t.name&&e.length&&"text"==e[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:e[0].text}),void o.pop();if(t.pre){t.pre=this.pre=void 0;for(var l=this.stack.length;l--;)this.stack[l].pre&&(this.pre=!0)}var c={};if("svg"==t.name){var h="",d=n,p=d.style;return n.style="",n.xmlns="http://www.w3.org/2000/svg",function t(n){for(var e in h+="<".concat(n.name),n.attrs){var i=n.attrs[e];i&&("viewbox"==e&&(e="viewBox"),h+=" ".concat(e,'="').concat(i,'"'))}if(n.children){h+=">";for(var s=0;s<n.children.length;s++)t(n.children[s]);h+="</".concat(n.name,">")}else h+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,".concat(h.replace(/#/g,"%23")),style:p,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(n.align&&("table"==t.name?"center"==n.align?c["margin-inline-start"]=c["margin-inline-end"]="auto":c.float=n.align:c["text-align"]=n.align,n.align=void 0),"font"==t.name&&(n.color&&(c.color=n.color,n.color=void 0),n.face&&(c["font-family"]=n.face,n.face=void 0),n.size)){var u=parseInt(n.size);isNaN(u)||(u<1?u=1:u>7&&(u=7),c["font-size"]=["xx-small","x-small","small","medium","large","x-large","xx-large"][u-1]),n.size=void 0}if((n.class||"").includes("align-center")&&(c["text-align"]="center"),Object.assign(c,this.parseStyle(t)),parseInt(c.width)>r&&(c["max-width"]="100%",c["box-sizing"]="border-box"),s.blockTags[t.name]?t.name="div":s.trustTags[t.name]||this.xml||(t.name="span"),"a"==t.name||"ad"==t.name||"iframe"==t.name)this.expose();else if("ul"!=t.name&&"ol"!=t.name||!t.c){if("table"==t.name){var f=parseFloat(n.cellpadding),m=parseFloat(n.cellspacing),g=parseFloat(n.border);if(t.c&&(isNaN(f)&&(f=2),isNaN(m)&&(m=2)),g&&(n.style+=";border:".concat(g,"px solid gray")),t.flag&&t.c){c.display="grid",m?(c["grid-gap"]="".concat(m,"px"),c.padding="".concat(m,"px")):g&&(n.style+=";border-left:0;border-top:0");var v=[],y=[],b=[],x={};(function t(n){for(var e=0;e<n.length;e++)"tr"==n[e].name?y.push(n[e]):t(n[e].children||[])})(e);for(var _=1;_<=y.length;_++){for(var w=1,k=0;k<y[_-1].children.length;k++,w++){var T=y[_-1].children[k];if("td"==T.name||"th"==T.name){while(x["".concat(_,".").concat(w)])w++;var O=T.attrs.style||"",N=O.indexOf("width")?O.indexOf(";width"):0;if(-1!=N){var $=O.indexOf(";",N+6);-1==$&&($=O.length),T.attrs.colspan||(v[w]=O.substring(N?N+7:6,$)),O=O.substr(0,N)+O.substr($)}if(O+=(g?";border:".concat(g,"px solid gray")+(m?"":";border-right:0;border-bottom:0"):"")+(f?";padding:".concat(f,"px"):""),T.attrs.colspan&&(O+=";grid-column-start:".concat(w,";grid-column-end:").concat(w+parseInt(T.attrs.colspan)),T.attrs.rowspan||(O+=";grid-row-start:".concat(_,";grid-row-end:").concat(_+1)),w+=parseInt(T.attrs.colspan)-1),T.attrs.rowspan){O+=";grid-row-start:".concat(_,";grid-row-end:").concat(_+parseInt(T.attrs.rowspan)),T.attrs.colspan||(O+=";grid-column-start:".concat(w,";grid-column-end:").concat(w+1));for(var I=1;I<T.attrs.rowspan;I++)x["".concat(_+I,".").concat(w)]=1}O&&(T.attrs.style=O),b.push(T)}}if(1==_){for(var S="",C=1;C<w;C++)S+="".concat(v[C]?v[C]:"auto"," ");c["grid-template-columns"]=S}}t.children=b}else t.c&&(c.display="table"),isNaN(m)||(c["border-spacing"]="".concat(m,"px")),(g||f)&&function t(n){for(var e=0;e<n.length;e++){var i=n[e];"th"==i.name||"td"==i.name?(g&&(i.attrs.style="border:".concat(g,"px solid gray;").concat(i.attrs.style||"")),f&&(i.attrs.style="padding:".concat(f,"px;").concat(i.attrs.style||""))):i.children&&t(i.children)}}(e);if(this.options.scrollTable&&!(n.style||"").includes("inline")){var j=i({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[j],n=j.attrs}}else if("td"!=t.name&&"th"!=t.name||!n.colspan&&!n.rowspan){if("ruby"==t.name){t.name="span";for(var L=0;L<e.length-1;L++)"text"==e[L].type&&"rt"==e[L+1].name&&(e[L]={name:"div",attrs:{style:"display:inline-block"},children:[{name:"div",attrs:{style:"font-size:50%;text-align:start"},children:e[L+1].children},e[L]]},e.splice(L+1,1))}else if(t.c){t.c=2;for(var z=t.children.length;z--;)t.children[z].c&&"table"!=t.children[z].name||(t.c=1)}}else for(var A=this.stack.length;A--;)if("table"==this.stack[A].name){this.stack[A].flag=1;break}}else{var E={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};E[n.type]&&(n.style+=";list-style-type:".concat(E[n.type]),n.type=void 0);for(var P=e.length;P--;)"li"==e[P].name&&(e[P].c=1)}if((c.display||"").includes("flex")&&!t.c)for(var M=e.length;M--;){var q=e[M];q.f&&(q.attrs.style=(q.attrs.style||"")+q.f,q.f=void 0)}var V=a&&(a.attrs.style||"").includes("flex")&&!t.c;for(var B in V&&(t.f=";max-width:100%"),c)if(c[B]){var D=";".concat(B,":").concat(c[B].replace(" !important",""));V&&(B.includes("flex")&&"flex-direction"!=B||"align-self"==B||"-"==c[B][0]||"width"==B&&D.includes("%"))?(t.f+=D,"width"==B&&(n.style+=";width:100%")):n.style+=D}n.style=n.style.substr(1)||void 0},d.prototype.onText=function(t){if(!this.pre){for(var n,e="",i=0,s=t.length;i<s;i++)o[t[i]]?(" "!=e[e.length-1]&&(e+=" "),"\n"!=t[i]||n||(n=!0)):e+=t[i];if(" "==e&&n)return;t=e}var a=Object.create(null);if(a.type="text",a.text=h(t),this.hook(a)){var r=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;r.push(a)}},p.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var n=this.content.length;-1!=this.i&&this.i<n;)this.state()},p.prototype.checkClose=function(t){var n="/"==this.content[this.i];return!!(">"==this.content[this.i]||n&&">"==this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=n?2:1,this.start=this.i,this.handler.onOpenTag(n),"script"==this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!=this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},p.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!=this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"==t||"!"==t||"?"==t){this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i));var n=this.content[this.i+2];if("/"==t&&(n>="a"&&n<="z"||n>="A"&&n<="Z"))return this.i+=2,this.start=this.i,this.state=this.endTag;var e="--\x3e";"!"==t&&"-"==this.content[this.i+2]&&"-"==this.content[this.i+3]||(e=">"),this.i=this.content.indexOf(e,this.i),-1!=this.i&&(this.i+=e.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},p.prototype.tagName=function(){if(o[this.content[this.i]]){this.handler.onTagName(this.content.substring(this.start,this.i));while(o[this.content[++this.i]]);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},p.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="==t){this.handler.onAttrName(this.content.substring(this.start,this.i));var n="="==t,e=this.content.length;while(++this.i<e)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(n)return this.start=this.i,this.state=this.attrVal;if("="!=this.content[this.i])return this.start=this.i,this.state=this.attrName;n=!0}}else this.checkClose("onAttrName")||this.i++},p.prototype.attrVal=function(){var t=this.content[this.i],n=this.content.length;if('"'==t||"'"==t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1==this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<n;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}while(o[this.content[++this.i]]);this.i<n&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},p.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"==t||"/"==t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!=t&&(this.i=this.content.indexOf(">",this.i),-1==this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=d},94986:function(t,n,e){var i=e(82109),s=e(86583);i({target:"Array",proto:!0,forced:s!==[].lastIndexOf},{lastIndexOf:s})},53939:function(t,n,e){e(69070);var i=e(38022);function s(t,n,e){return n=i(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}t.exports=s,t.exports.__esModule=!0,t.exports["default"]=t.exports},78837:function(t,n,e){e(47941),e(82526),e(57327),e(41539),e(38880),e(57658),e(54747),e(49337),e(33321),e(69070);var i=e(53939);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},41900:function(t,n,e){e(96649),e(96078),e(82526),e(41817),e(41539),e(21703),e(96647),e(9653);var i=e(86587)["default"];function s(t,n){if("object"!==i(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,n||"default");if("object"!==i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}t.exports=s,t.exports.__esModule=!0,t.exports["default"]=t.exports},38022:function(t,n,e){var i=e(86587)["default"],s=e(41900);function a(t){var n=s(t,"string");return"symbol"===i(n)?n:String(n)}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports}}]);
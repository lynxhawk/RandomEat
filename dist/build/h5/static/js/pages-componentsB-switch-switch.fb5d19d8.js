(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[1611],{77696:function(e,a,t){var l=t(1346);l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals);var i=t(56).Z;i("3b647001",l,!0,{sourceMap:!1,shadowMode:!1})},12461:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var l,i={uSwitch:t(30724).Z},u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"u-page"},[t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("基础功能")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.change.apply(void 0,arguments)}},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("加载中")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{loading:!0},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{loading:!0},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("禁用状态")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{disabled:!0},model:{value:e.value5,callback:function(a){e.value5=a},expression:"value5"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{disabled:!0},model:{value:e.value6,callback:function(a){e.value6=a},expression:"value6"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("自定义尺寸")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{size:"28"},model:{value:e.value7,callback:function(a){e.value7=a},expression:"value7"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{size:"20"},model:{value:e.value8,callback:function(a){e.value8=a},expression:"value8"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("自定义颜色")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{activeColor:"#f56c6c",loading:!0},model:{value:e.value9,callback:function(a){e.value9=a},expression:"value9"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{activeColor:"#5ac725",loading:!0},model:{value:e.value10,callback:function(a){e.value10=a},expression:"value10"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("自定义样式")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{space:2,activeColor:"#f56c6c",inactiveColor:"rgb(230, 230, 230)"},model:{value:e.value11,callback:function(a){e.value11=a},expression:"value11"}})],1),t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{space:"2",activeColor:"#f9ae3d",inactiveColor:"rgb(230, 230, 230)"},model:{value:e.value12,callback:function(a){e.value12=a},expression:"value12"}})],1)],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("异步控制")]),t("v-uni-view",{staticClass:"u-demo-block__content"},[t("v-uni-view",{staticClass:"u-page__tag-item"},[t("u-switch",{attrs:{asyncChange:!0},on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.asyncChange.apply(void 0,arguments)}},model:{value:e.value13,callback:function(a){e.value13=a},expression:"value13"}})],1)],1)],1)],1)},s=[],c={data:function(){return{value1:!1,value2:!0,value3:!1,value4:!0,value5:!1,value6:!0,value7:!1,value8:!0,value9:!0,value10:!0,value11:!1,value12:!0,value13:!0}},watch:{value1:function(e,a){console.log("v-model",e)}},methods:{change:function(e){console.log("change",e)},asyncChange:function(e){var a=this;uni.showModal({content:e?"确定要打开吗":"确定要关闭吗",success:function(t){t.confirm&&(a.value13=e)}})}}},n=c,v=(t(77696),t(69453)),o=(0,v.Z)(n,u,s,!1,null,"0e7ad4fa",null,!1,i,l),_=o.exports},1346:function(e,a,t){"use strict";t.r(a);var l=t(43481),i=t.n(l),u=t(2400),s=t.n(u),c=s()(i());c.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */.u-page__tag-item[data-v-0e7ad4fa]{margin-right:30px}.u-demo-block__content[data-v-0e7ad4fa]{flex-direction:row;flex-wrap:wrap;align-items:center}',""]),a["default"]=c}}]);
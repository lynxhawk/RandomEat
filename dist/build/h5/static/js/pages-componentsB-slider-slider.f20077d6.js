(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[91],{15012:function(e,i,t){var l=t(84055);l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals);var u=t(56).Z;u("90e8b130",l,!0,{sourceMap:!1,shadowMode:!1})},5074:function(e,i,t){var l=t(13604);l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals);var u=t(56).Z;u("c93a0420",l,!0,{sourceMap:!1,shadowMode:!1})},92675:function(e,i,t){"use strict";var l;t.d(i,{Z:function(){return v}});var u,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"u-slider",style:[e.$u.addStyle(e.customStyle)]},[t("v-uni-slider",{attrs:{min:e.min,max:e.max,step:e.step,value:e.value,activeColor:e.activeColor,inactiveColor:e.inactiveColor,blockSize:e.$u.getPx(e.blockSize),blockColor:e.blockColor,showValue:e.showValue,disabled:e.disabled},on:{changing:function(i){arguments[0]=i=e.$handleEvent(i),e.changingHandler.apply(void 0,arguments)},change:function(i){arguments[0]=i=e.$handleEvent(i),e.changeHandler.apply(void 0,arguments)}}})],1)},s=[],n=(t(9653),{props:{min:{type:[Number,String],default:uni.$u.props.slider.min},max:{type:[Number,String],default:uni.$u.props.slider.max},step:{type:[Number,String],default:uni.$u.props.slider.step},value:{type:[Number,String],default:uni.$u.props.slider.value},activeColor:{type:String,default:uni.$u.props.slider.activeColor},inactiveColor:{type:String,default:uni.$u.props.slider.inactiveColor},blockSize:{type:[Number,String],default:uni.$u.props.slider.blockSize},blockColor:{type:String,default:uni.$u.props.slider.blockColor},disabled:{type:Boolean,default:uni.$u.props.slider.disabled},showValue:{type:Boolean,default:uni.$u.props.slider.showValue}}}),o={name:"u--slider",mixins:[uni.$u.mpMixin,uni.$u.mixin,n],methods:{changingHandler:function(e){var i=e.detail.value;this.$emit("input",i),this.$emit("changing",i)},changeHandler:function(e){var i=e.detail.value;this.$emit("input",i),this.$emit("change",i)}}},c=o,r=(t(15012),t(69453)),d=(0,r.Z)(c,a,s,!1,null,"5fb96c35",null,!1,l,u),v=d.exports},63214:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return d}});var l,u={uSlider:t(92675).Z},a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"u-page"},[t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("基本案例")]),t("v-uni-view",{staticClass:"u-page__slide-item"},[t("u-slider",{model:{value:e.value1,callback:function(i){e.value1=i},expression:"value1"}})],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("自定义范围(0—50)")]),t("v-uni-view",{staticClass:"u-page__slide-item"},[t("u-slider",{attrs:{showValue:!0,min:"0",max:"50"},model:{value:e.value2,callback:function(i){e.value2=i},expression:"value2"}})],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("指定步长(每次步进5)")]),t("v-uni-view",{staticClass:"u-page__slide-item"},[t("u-slider",{attrs:{step:5},model:{value:e.value4,callback:function(i){e.value4=i},expression:"value4"}})],1)],1),t("v-uni-view",{staticClass:"u-demo-block"},[t("v-uni-text",{staticClass:"u-demo-block__title"},[e._v("自定义样式")]),t("v-uni-view",{staticClass:"u-page__slide-item"},[t("u-slider",{attrs:{activeColor:"#deab8a",blockColor:"#f47920"},model:{value:e.value5,callback:function(i){e.value5=i},expression:"value5"}})],1)],1)],1)},s=[],n={data:function(){return{value1:30,value2:30,value3:30,value4:30,value5:30}},watch:{value1:function(e){}},methods:{moving:function(e){},click:function(e){},end:function(e){},start:function(e){}}},o=n,c=(t(5074),t(69453)),r=(0,c.Z)(o,a,s,!1,null,"17918d48",null,!1,u,l),d=r.exports},84055:function(e,i,t){"use strict";t.r(i);var l=t(43481),u=t.n(l),a=t(2400),s=t.n(a),n=s()(u());n.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-5fb96c35], uni-scroll-view[data-v-5fb96c35], uni-swiper-item[data-v-5fb96c35]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),i["default"]=n},13604:function(e,i,t){"use strict";t.r(i);var l=t(43481),u=t.n(l),a=t(2400),s=t.n(a),n=s()(u());n.push([e.id,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */',""]),i["default"]=n}}]);
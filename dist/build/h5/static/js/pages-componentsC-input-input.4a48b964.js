"use strict";(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[4266],{59375:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var o,s={"u-Input":i(27388).Z,uInput:i(44945).Z,"u-Text":i(88488).Z,uCode:i(52066).Z,uButton:i(40216).Z,uGap:i(70296).Z},u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-page"},[i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("基础使用")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"surround"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("可清空内容")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"surround",clearable:!0}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("数字键盘")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"surround",type:"number",clearable:!0}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("密码类型")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"surround",password:!0,clearable:!0}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("显示下划线")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"bottom",clearable:!0}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("禁用状态")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"禁用状态",border:"surround",disabled:!0}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("圆形")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"请输入内容",border:"surround",shape:"circle"}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("前后图标")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u--input",{attrs:{placeholder:"前置图标",prefixIcon:"search",prefixIconStyle:"font-size: 22px;color: #909399"}})],1),i("v-uni-view",{staticClass:"u-demo-block__content",staticStyle:{"margin-top":"15px"}},[i("u--input",{attrs:{placeholder:"后置图标",suffixIcon:"map-fill",suffixIconStyle:"color: #909399"}})],1)],1),i("v-uni-view",{staticClass:"u-demo-block"},[i("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("前后插槽")]),i("v-uni-view",{staticClass:"u-demo-block__content"},[i("u-input",{attrs:{placeholder:"前置插槽"}},[i("u--text",{attrs:{slot:"prefix",text:"http://",margin:"0 3px 0 0",type:"tips"},slot:"prefix"})],1)],1),i("v-uni-view",{staticClass:"u-demo-block__content",staticStyle:{"margin-top":"15px"}},[i("u-input",{attrs:{placeholder:"后置插槽"}},[i("template",{slot:"suffix"},[i("u-code",{ref:"uCode",attrs:{seconds:"20",changeText:"X秒重新获取哈哈哈"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}}),i("u-button",{attrs:{text:t.tips,type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}})],1)],2)],1)],1),i("u-gap",{attrs:{bgColor:"#fff",height:"50"}})],1)},a=[],n={data:function(){return{tips:"",value:""}},watch:{value:function(t,e){}},methods:{codeChange:function(t){this.tips=t},getCode:function(){var t=this;this.$refs.uCode.canGetCode?(uni.showLoading({title:"正在获取验证码"}),setTimeout((function(){uni.hideLoading(),uni.$u.toast("验证码已发送"),t.$refs.uCode.start()}),2e3)):uni.$u.toast("倒计时结束后再发送")},change:function(t){console.log("change",t)}}},l=n,c=i(69453),r=(0,c.Z)(l,u,a,!1,null,"0db30272",null,!1,s,o),d=r.exports}}]);
(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[1076],{39115:function(e,t,n){var i=n(20943);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var u=n(56).Z;u("2ac5d830",i,!0,{sourceMap:!1,shadowMode:!1})},70462:function(e,t,n){var i=n(68959);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var u=n(56).Z;u("5e3c6538",i,!0,{sourceMap:!1,shadowMode:!1})},2047:function(e,t,n){var i=n(14454);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var u=n(56).Z;u("6cf9ef12",i,!0,{sourceMap:!1,shadowMode:!1})},27388:function(e,t,n){"use strict";var i;n.d(t,{Z:function(){return f}});var u,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uvInput",{attrs:{value:e.value,type:e.type,fixed:e.fixed,disabled:e.disabled,disabledColor:e.disabledColor,clearable:e.clearable,password:e.password,maxlength:e.maxlength,placeholder:e.placeholder,placeholderClass:e.placeholderClass,placeholderStyle:e.placeholderStyle,showWordLimit:e.showWordLimit,confirmType:e.confirmType,confirmHold:e.confirmHold,holdKeyboard:e.holdKeyboard,focus:e.focus,autoBlur:e.autoBlur,disableDefaultPadding:e.disableDefaultPadding,cursor:e.cursor,cursorSpacing:e.cursorSpacing,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,inputAlign:e.inputAlign,fontSize:e.fontSize,color:e.color,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,suffixIconStyle:e.suffixIconStyle,prefixIconStyle:e.prefixIconStyle,border:e.border,readonly:e.readonly,shape:e.shape,customStyle:e.customStyle,formatter:e.formatter,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("focus")},blur:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("blur",t)}.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("keyboardheightchange")},change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("change",t)}.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("input",t)}.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("confirm",t)}.apply(void 0,arguments)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("clear")},click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("click")}}},[e._t("prefix",null,{slot:"prefix"}),e._t("suffix",null,{slot:"suffix"})],2)},a=[],r=n(44945),s=n(54740),l={name:"u--input",mixins:[uni.$u.mpMixin,s.Z,uni.$u.mixin],components:{uvInput:r.Z}},p=l,c=n(69453),d=(0,c.Z)(p,o,a,!1,null,null,null,!1,i,u),f=d.exports},52066:function(e,t,n){"use strict";var i;n.d(t,{Z:function(){return d}});var u,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-code"})},a=[],r=(n(9653),n(74916),n(15306),{props:{seconds:{type:[String,Number],default:uni.$u.props.code.seconds},startText:{type:String,default:uni.$u.props.code.startText},changeText:{type:String,default:uni.$u.props.code.changeText},endText:{type:String,default:uni.$u.props.code.endText},keepRunning:{type:Boolean,default:uni.$u.props.code.keepRunning},uniqueKey:{type:String,default:uni.$u.props.code.uniqueKey}}}),s={name:"u-code",mixins:[uni.$u.mpMixin,uni.$u.mixin,r],data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3),this.setTimeToStorage()},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}},l=s,p=(n(39115),n(69453)),c=(0,p.Z)(l,o,a,!1,null,"83991a1a",null,!1,i,u),d=c.exports},70296:function(e,t,n){"use strict";var i;n.d(t,{Z:function(){return d}});var u,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-gap",style:[e.gapStyle]})},a=[],r=(n(9653),{props:{bgColor:{type:String,default:uni.$u.props.gap.bgColor},height:{type:[String,Number],default:uni.$u.props.gap.height},marginTop:{type:[String,Number],default:uni.$u.props.gap.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.gap.marginBottom}}}),s={name:"u-gap",mixins:[uni.$u.mpMixin,uni.$u.mixin,r],computed:{gapStyle:function(){var e={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}}},l=s,p=(n(70462),n(69453)),c=(0,p.Z)(l,o,a,!1,null,"a54a97e0",null,!1,i,u),d=c.exports},44945:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i,u={uIcon:n(38275).Z},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-input",class:e.inputClass,style:[e.wrapperStyle]},[n("v-uni-view",{staticClass:"u-input__content"},[e.prefixIcon||e.$slots.prefix?n("v-uni-view",{staticClass:"u-input__content__prefix-icon"},[e._t("prefix",[n("u-icon",{attrs:{name:e.prefixIcon,size:"18",customStyle:e.prefixIconStyle}})])],2):e._e(),n("v-uni-view",{staticClass:"u-input__content__field-wrapper",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"u-input__content__field-wrapper__field",style:[e.inputStyle],attrs:{type:e.type,focus:e.focus,cursor:e.cursor,value:e.innerValue,"auto-blur":e.autoBlur,disabled:e.disabled||e.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":e.placeholderClass,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,password:e.password||"password"===e.type||void 0,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.onkeyboardheightchange.apply(void 0,arguments)}}})],1),e.isShowClear?n("v-uni-view",{staticClass:"u-input__content__clear",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"}})],1):e._e(),e.suffixIcon||e.$slots.suffix?n("v-uni-view",{staticClass:"u-input__content__subfix-icon"},[e._t("suffix",[n("u-icon",{attrs:{name:e.suffixIcon,size:"18",customStyle:e.suffixIconStyle}})])],2):e._e()],1)],1)},a=[],r=(n(92222),n(57658),n(54740)),s={name:"u-input",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.Z],data:function(){return{innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:function(e){return e}}},watch:{value:{immediate:!0,handler:function(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{isShowClear:function(){var e=this.clearable,t=this.readonly,n=this.focused,i=this.innerValue;return!!e&&!t&&!!n&&""!==i},inputClass:function(){var e=[],t=this.border,n=(this.disabled,this.shape);return"surround"===t&&(e=e.concat(["u-border","u-input--radius"])),e.push("u-input--".concat(n)),"bottom"===t&&(e=e.concat(["u-border-bottom","u-input--no-radius"])),e.join(" ")},wrapperStyle:function(){var e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},inputStyle:function(){var e={color:this.color,fontSize:uni.$u.addUnit(this.fontSize),textAlign:this.inputAlign};return e}},methods:{setFormatter:function(e){this.innerFormatter=e},onInput:function(e){var t=this,n=e.detail||{},i=n.value,u=void 0===i?"":i,o=this.formatter||this.innerFormatter,a=o(u);this.innerValue=u,this.$nextTick((function(){t.innerValue=a,t.valueChange()}))},onBlur:function(e){var t=this;this.$emit("blur",e.detail.value),uni.$u.sleep(50).then((function(){t.focused=!1})),uni.$u.formValidate(this,"blur")},onFocus:function(e){this.focused=!0,this.$emit("focus")},onConfirm:function(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange:function(){this.$emit("keyboardheightchange")},valueChange:function(){var e=this,t=this.innerValue;this.$nextTick((function(){e.$emit("input",t),e.changeFromInner=!0,e.$emit("change",t),uni.$u.formValidate(e,"change")}))},onClear:function(){var e=this;this.innerValue="",this.$nextTick((function(){e.valueChange(),e.$emit("clear")}))},clickHandler:function(){}}},l=s,p=(n(2047),n(69453)),c=(0,p.Z)(l,o,a,!1,null,"0774a962",null,!1,u,i),d=c.exports},20943:function(e,t,n){"use strict";n.r(t);var i=n(43481),u=n.n(i),o=n(2400),a=n.n(o),r=a()(u());r.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-83991a1a], uni-scroll-view[data-v-83991a1a], uni-swiper-item[data-v-83991a1a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t["default"]=r},68959:function(e,t,n){"use strict";n.r(t);var i=n(43481),u=n.n(i),o=n(2400),a=n.n(o),r=a()(u());r.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-a54a97e0], uni-scroll-view[data-v-a54a97e0], uni-swiper-item[data-v-a54a97e0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}',""]),t["default"]=r},14454:function(e,t,n){"use strict";n.r(t);var i=n(43481),u=n.n(i),o=n(2400),a=n.n(o),r=a()(u());r.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-0774a962], uni-scroll-view[data-v-0774a962], uni-swiper-item[data-v-0774a962]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-input[data-v-0774a962]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:space-between;flex:1}.u-input--radius[data-v-0774a962], .u-input--square[data-v-0774a962]{border-radius:4px}.u-input--no-radius[data-v-0774a962]{border-radius:0}.u-input--circle[data-v-0774a962]{border-radius:100px}.u-input__content[data-v-0774a962]{flex:1;\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:space-between}.u-input__content__field-wrapper[data-v-0774a962]{position:relative;\ndisplay:flex;\nflex-direction:row;margin:0;flex:1}.u-input__content__field-wrapper__field[data-v-0774a962]{line-height:26px;text-align:left;color:#303133;height:24px;font-size:15px;flex:1}.u-input__content__clear[data-v-0774a962]{width:20px;height:20px;border-radius:100px;background-color:#c6c7cb;\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;-webkit-transform:scale(.82);transform:scale(.82);margin-left:4px}.u-input__content__subfix-icon[data-v-0774a962]{margin-left:4px}.u-input__content__prefix-icon[data-v-0774a962]{margin-right:4px}',""]),t["default"]=r},54740:function(e,t,n){"use strict";n(9653);t.Z={props:{value:{type:[String,Number],default:uni.$u.props.input.value},type:{type:String,default:uni.$u.props.input.type},fixed:{type:Boolean,default:uni.$u.props.input.fixed},disabled:{type:Boolean,default:uni.$u.props.input.disabled},disabledColor:{type:String,default:uni.$u.props.input.disabledColor},clearable:{type:Boolean,default:uni.$u.props.input.clearable},password:{type:Boolean,default:uni.$u.props.input.password},maxlength:{type:[String,Number],default:uni.$u.props.input.maxlength},placeholder:{type:String,default:uni.$u.props.input.placeholder},placeholderClass:{type:String,default:uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:uni.$u.props.input.placeholderStyle},showWordLimit:{type:Boolean,default:uni.$u.props.input.showWordLimit},confirmType:{type:String,default:uni.$u.props.input.confirmType},confirmHold:{type:Boolean,default:uni.$u.props.input.confirmHold},holdKeyboard:{type:Boolean,default:uni.$u.props.input.holdKeyboard},focus:{type:Boolean,default:uni.$u.props.input.focus},autoBlur:{type:Boolean,default:uni.$u.props.input.autoBlur},disableDefaultPadding:{type:Boolean,default:uni.$u.props.input.disableDefaultPadding},cursor:{type:[String,Number],default:uni.$u.props.input.cursor},cursorSpacing:{type:[String,Number],default:uni.$u.props.input.cursorSpacing},selectionStart:{type:[String,Number],default:uni.$u.props.input.selectionStart},selectionEnd:{type:[String,Number],default:uni.$u.props.input.selectionEnd},adjustPosition:{type:Boolean,default:uni.$u.props.input.adjustPosition},inputAlign:{type:String,default:uni.$u.props.input.inputAlign},fontSize:{type:[String,Number],default:uni.$u.props.input.fontSize},color:{type:String,default:uni.$u.props.input.color},prefixIcon:{type:String,default:uni.$u.props.input.prefixIcon},prefixIconStyle:{type:[String,Object],default:uni.$u.props.input.prefixIconStyle},suffixIcon:{type:String,default:uni.$u.props.input.suffixIcon},suffixIconStyle:{type:[String,Object],default:uni.$u.props.input.suffixIconStyle},border:{type:String,default:uni.$u.props.input.border},readonly:{type:Boolean,default:uni.$u.props.input.readonly},shape:{type:String,default:uni.$u.props.input.shape},formatter:{type:[Function,null],default:uni.$u.props.input.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}}}}]);
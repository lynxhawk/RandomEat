(self["webpackChunkuview2_0_cli"]=self["webpackChunkuview2_0_cli"]||[]).push([[2461],{88629:function(e,t,i){var a=i(92858);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=i(56).Z;o("62b04455",a,!0,{sourceMap:!1,shadowMode:!1})},65234:function(e,t,i){var a=i(32694);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=i(56).Z;o("efdfa946",a,!0,{sourceMap:!1,shadowMode:!1})},14161:function(e,t,i){"use strict";var a;i.d(t,{Z:function(){return h}});var o,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox-group",class:e.bemClass},[e._t("default")],2)},c=[],r=(i(21249),i(57658),i(9653),{props:{name:{type:String,default:uni.$u.props.checkboxGroup.name},value:{type:Array,default:uni.$u.props.checkboxGroup.value},shape:{type:String,default:uni.$u.props.checkboxGroup.shape},disabled:{type:Boolean,default:uni.$u.props.checkboxGroup.disabled},activeColor:{type:String,default:uni.$u.props.checkboxGroup.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkboxGroup.inactiveColor},size:{type:[String,Number],default:uni.$u.props.checkboxGroup.size},placement:{type:String,default:uni.$u.props.checkboxGroup.placement},labelSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.labelSize},labelColor:{type:[String],default:uni.$u.props.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:uni.$u.props.checkboxGroup.labelDisabled},iconColor:{type:String,default:uni.$u.props.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.checkboxGroup.iconSize},iconPlacement:{type:String,default:uni.$u.props.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:uni.$u.props.checkboxGroup.borderBottom}}}),l={name:"u-checkbox-group",mixins:[uni.$u.mpMixin,uni.$u.mixin,r],computed:{parentData:function(){return[this.value,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass:function(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:function(){this.children.length&&this.children.map((function(e){"function"===typeof e.init&&e.init()}))}},data:function(){return{}},created:function(){this.children=[]},methods:{unCheckedOther:function(e){var t=[];this.children.map((function(e){e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("input",t)}}},s=l,u=(i(88629),i(69453)),p=(0,u.Z)(s,n,c,!1,null,"25f39ece",null,!1,a,o),h=p.exports},25276:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var a,o={uIcon:i(38275).Z},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox",class:["u-checkbox-label--"+e.parentData.iconPlacement,e.parentData.borderBottom&&"column"===e.parentData.placement&&"u-border-bottom"],style:[e.checkboxStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.wrapperClickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:e.iconClasses,style:[e.iconWrapStyle],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.iconClickHandler.apply(void 0,arguments)}}},[e._t("icon",[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.elIconSize,color:e.elIconColor}})])],2),i("v-uni-text",{style:{color:e.elDisabled?e.elInactiveColor:e.elLabelColor,fontSize:e.elLabelSize,lineHeight:e.elLabelSize},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.labelClickHandler.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},c=[],r=(i(57658),i(74916),i(77601),i(41539),i(9653),{props:{name:{type:[String,Number,Boolean],default:uni.$u.props.checkbox.name},shape:{type:String,default:uni.$u.props.checkbox.shape},size:{type:[String,Number],default:uni.$u.props.checkbox.size},checked:{type:Boolean,default:uni.$u.props.checkbox.checked},disabled:{type:[String,Boolean],default:uni.$u.props.checkbox.disabled},activeColor:{type:String,default:uni.$u.props.checkbox.activeColor},inactiveColor:{type:String,default:uni.$u.props.checkbox.inactiveColor},iconSize:{type:[String,Number],default:uni.$u.props.checkbox.iconSize},iconColor:{type:String,default:uni.$u.props.checkbox.iconColor},label:{type:[String,Number],default:uni.$u.props.checkbox.label},labelSize:{type:[String,Number],default:uni.$u.props.checkbox.labelSize},labelColor:{type:String,default:uni.$u.props.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:uni.$u.props.checkbox.labelDisabled}}}),l={name:"u-checkbox",mixins:[uni.$u.mpMixin,uni.$u.mixin,r],data:function(){return{isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,value:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor:function(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor:function(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize:function(){return uni.$u.addUnit(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor:function(){var e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle:function(){var e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=uni.$u.addUnit(this.elSize),e.height=uni.$u.addUnit(this.elSize),"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle:function(){var e={};return this.parentData.borderBottom&&"row"===this.parentData.placement&&uni.$u.error("检测到您将borderBottom设置为true，需要同时将u-checkbox-group的placement设置为column才有效"),this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.updateParentData(),this.parent||uni.$u.error("u-checkbox必须搭配u-checkbox-group组件使用"),this.checked?this.isChecked=!0:uni.$u.test.array(this.parentData.value)&&(this.isChecked=this.parentData.value.some((function(t){return t===e.name})))},updateParentData:function(){this.getParentData("u-checkbox-group")},wrapperClickHandler:function(e){"right"===this.parentData.iconPlacement&&this.iconClickHandler(e)},iconClickHandler:function(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler:function(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){var e=this;this.$emit("change",this.isChecked),this.$nextTick((function(){uni.$u.formValidate(e,"change")}))},setRadioCheckedStatus:function(){this.isChecked=!this.isChecked,this.emitEvent(),"function"===typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked:function(){this.isChecked=this.checked}}},s=l,u=(i(65234),i(69453)),p=(0,u.Z)(s,n,c,!1,null,"45c84c98",null,!1,o,a),h=p.exports},92858:function(e,t,i){"use strict";i.r(t);var a=i(43481),o=i.n(a),n=i(2400),c=i.n(n),r=c()(o());r.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-25f39ece], uni-scroll-view[data-v-25f39ece], uni-swiper-item[data-v-25f39ece]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox-group--row[data-v-25f39ece]{\ndisplay:flex;\nflex-direction:row}.u-checkbox-group--column[data-v-25f39ece]{\ndisplay:flex;\nflex-direction:column}',""]),t["default"]=r},32694:function(e,t,i){"use strict";i.r(t);var a=i(43481),o=i.n(a),n=i(2400),c=i.n(n),r=c()(o());r.push([e.id,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用\n */uni-view[data-v-45c84c98], uni-scroll-view[data-v-45c84c98], uni-swiper-item[data-v-45c84c98]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-checkbox[data-v-45c84c98]{\ndisplay:flex;\nflex-direction:row;overflow:hidden;flex-direction:row;align-items:center}.u-checkbox-label--left[data-v-45c84c98]{flex-direction:row}.u-checkbox-label--right[data-v-45c84c98]{flex-direction:row-reverse;justify-content:space-between}.u-checkbox__icon-wrap[data-v-45c84c98]{box-sizing:border-box;transition-property:border-color,background-color,color;transition-duration:.2s;color:#606266;\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;color:transparent;text-align:center;margin-right:6px;font-size:6px;border-width:1px;border-color:#c8c9cc;border-style:solid}.u-checkbox__icon-wrap--circle[data-v-45c84c98]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-45c84c98]{border-radius:3px}.u-checkbox__icon-wrap--checked[data-v-45c84c98]{color:#fff;background-color:red;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-45c84c98]{background-color:#ebedf0!important}.u-checkbox__icon-wrap--disabled--checked[data-v-45c84c98]{color:#c8c9cc!important}.u-checkbox__label[data-v-45c84c98]{word-wrap:break-word;margin-left:5px;margin-right:12px;color:#606266;font-size:15px}.u-checkbox__label--disabled[data-v-45c84c98]{color:#c8c9cc}',""]),t["default"]=r}}]);
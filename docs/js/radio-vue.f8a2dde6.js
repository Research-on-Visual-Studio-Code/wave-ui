(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["radio-vue"],{f987:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{staticClass:"mt4",attrs:{h1:"",slug:"w-radio-and-w-radios"}},[a("span",{staticClass:"code"},[e._v("w-radio")]),e._v(" & "),a("span",{staticClass:"code"},[e._v("w-radios")])]),a("title-link",{attrs:{h2:"",slug:"multiple-radio-buttons"}},[e._v("Multiple radio buttons using the "),a("code",[e._v("w-radios")]),e._v(" tag")]),e._m(0),a("h3",[e._v("States")]),a("div",{staticClass:"w-flex wrap"},[a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,label:"Checked"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,label:"Unchecked"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!0,disabled:"",label:"Checked &amp; disabled"}}),a("w-radio",{staticClass:"mr3 mb1",attrs:{value:!1,disabled:"",label:"Unchecked &amp; disabled"}})],1),a("h3",[e._v("V-model")]),e._m(1),a("div",{staticClass:"w-flex"},[a("w-radios",{attrs:{items:e.radios1},model:{value:e.selectedRadio1,callback:function(t){e.selectedRadio1=t},expression:"selectedRadio1"}}),a("div",{staticClass:"title-3 ml8"},[e._v("Selected choice: "),a("code",[e._v(e._s(e.selectedRadio1||"null"))])])],1),a("h3",[e._v("Default column layout")]),a("w-radios",{attrs:{items:e.radios2}}),a("h3",[e._v("Inline layout")]),a("w-radios",{attrs:{items:e.radios2,inline:""}}),a("h3",[e._v("Color")]),e._m(2),a("w-radios",{attrs:{items:e.radios2,color:"purple"}}),a("h3",[e._v("Custom label content")]),e._m(3),a("w-radios",{attrs:{items:e.radios3,color:"green"},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item;return[a("span",{staticClass:"pr2"},[e._v(e._s(s.label))]),a("w-icon",{staticClass:"deep-purple"},[e._v(e._s(s.icon))])]}}])}),a("w-divider",{staticClass:"ma10 ml0"}),a("title-link",{attrs:{h2:""}},[e._v("Individual radio buttons")]),e._m(4),a("w-radio",{staticClass:"mr2",attrs:{label:"Choice 1",name:"radios2",color:"success"}}),a("w-radio",{staticClass:"mr2",attrs:{label:"Choice 2",name:"radios2",color:"warning"}}),a("w-radio",{attrs:{label:"Choice 3",name:"radios2",color:"error"}}),a("h3",[e._v("Custom label content")]),e._m(5),a("w-radio",{staticClass:"mr2",attrs:{name:"radios2",color:"success"}},[a("span",{staticClass:"pr2"},[e._v("Choice 1")]),a("w-icon",{staticClass:"primary"},[e._v("wi-star")])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("code",[e._v("w-radios")]),e._v(" component allows a fast and easy rendering of\nmultiple radio buttons by passing the items through a prop."),a("br"),e._v("\nIt accepts an inline parameter to display the radio buttons inline,\nand allows you to customize the label of each radio button through slot.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If a value is set in the choice's data, it will be returned through the v-model when selected."),a("br"),e._v("\nIf no value is set, the choice's label will be returned instead.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default the "),a("code",[e._v("w-radios")]),e._v(" & "),a("code",[e._v("w-radio")]),e._v(" components will\nuse the primary color.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("w-radios")]),e._v(" provides a "),a("code",[e._v("label")]),e._v(" slot to customize the label of each radio\nbutton.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("It is possible to use the "),a("code",[e._v("w-radio")]),e._v(" component to render a single radio button\nat once."),a("br"),e._v("\nA set of radio buttons will only work together if they have the same v-model,\nor the same "),a("code",[e._v("name")]),e._v(" attribute (standard HTML).\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("w-radio")]),e._v(" provides a default slot to customize the content.")])}],l={data:function(){return{selectedRadio1:null,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"},{label:"Choice 4"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}]}}},o=l,r=a("2877"),n=Object(r["a"])(o,s,i,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=radio-vue.f8a2dde6.js.map
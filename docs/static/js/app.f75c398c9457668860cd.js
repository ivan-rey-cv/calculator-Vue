webpackJsonp([1],{"/bBJ":function(t,e){},"1/Jg":function(t,e){},JIVT:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex jc-center ai-center grow-1 shrink-1 basis-10 pointer active-1",on:{click:t.append}},[n("code",[t._v("\n    "+t._s(t.val)+"\n  ")])])},s=[],a={render:i,staticRenderFns:s};e.a=a},M93x:function(t,e,n){"use strict";function i(t){n("1/Jg")}var s=n("xJD8"),a=n("UxLP"),p=n("VU/8"),r=i,d=p(s.a,a.a,!1,r,"data-v-7e0fb9bf",null);e.a=d.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("M93x");i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:s.a}})},UxLP:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"h-screen w-screen min-h-500 max-h-750 flex flex-col ai-stretch",attrs:{id:"app"}},[n("section",{staticClass:"flex ai-center px3 overflow-auto bgc-green"},[n("h2",{staticClass:"w-full flex jc-end ai-center break-keep"},t._l(t.display,function(e,i){return n("code",{key:i,class:t.inputClass(e)},[t._v("\n        "+t._s(t.numberWithCommas(e))+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"grow-3 basis-30 flex bgc-yellow"},[n("AppendItem",{attrs:{val:"("},on:{append:t.addParenthesis}}),t._v(" "),n("AppendItem",{attrs:{val:")"},on:{append:t.addParenthesis}}),t._v(" "),n("AppendItem",{attrs:{val:"+|-"},on:{append:t.plusMinus}}),t._v(" "),n("AppendItem",{attrs:{val:"AC"},on:{append:t.reset}})],1),t._v(" "),n("AppendItem",{staticClass:"grow-1 basis-10 bgc-red",attrs:{val:"+"},on:{append:t.inputModifier}})],1),t._v(" "),n("div",{staticClass:"flex bgc-blue"},[n("AppendItem",{attrs:{val:"7"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"8"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"9"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{staticClass:"bgc-red",attrs:{val:"-"},on:{append:t.inputModifier}})],1),t._v(" "),n("div",{staticClass:"flex bgc-blue"},[n("AppendItem",{attrs:{val:"4"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"5"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"6"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{staticClass:"bgc-red",attrs:{val:"/"},on:{append:t.inputModifier}})],1),t._v(" "),n("div",{staticClass:"flex  bgc-blue"},[n("AppendItem",{attrs:{val:"1"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"2"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{attrs:{val:"3"},on:{append:t.inputNumber}}),t._v(" "),n("AppendItem",{staticClass:"bgc-red",attrs:{val:"*"},on:{append:t.inputModifier}})],1),t._v(" "),n("div",{staticClass:"flex  bgc-blue"},[n("AppendItem",{attrs:{val:"0"},on:{append:t.addZeros}}),t._v(" "),n("AppendItem",{attrs:{val:"."}}),t._v(" "),n("AppendItem",{attrs:{val:"DEL"},on:{append:t.removeInput}}),t._v(" "),n("AppendItem",{staticClass:"bgc-red",attrs:{val:"="},on:{append:t.calculateInputs}})],1)])},s=[],a={render:i,staticRenderFns:s};e.a=a},huE7:function(t,e,n){"use strict";function i(t){n("/bBJ")}var s=n("jgWf"),a=n("JIVT"),p=n("VU/8"),r=i,d=p(s.a,a.a,!1,r,"data-v-5bd71c78",null);e.a=d.exports},jgWf:function(t,e,n){"use strict";e.a={name:"AppendItem",props:{val:{type:[String,Number]}},methods:{append:function(){this.$emit("append",this.val)}}}},xJD8:function(t,e,n){"use strict";var i=n("7+uW"),s=n("huE7");e.a={name:"app",components:{AppendItem:s.a},data:function(){return{display:[],isModifying:!1,isInputting:!1}},methods:{modifierIndex:function(t){return["(",")","*","/","-","+"].indexOf(t)},numberWithCommas:function(t){return this.modifierIndex(t)>-1?t:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},inputClass:function(t){var e=this.modifierIndex(t),n=[["darkyellow"],["darkyellow"],["darkblue","pr1"],["darkorange","pr1"],["darkred","pr1"],["darkgreen","pr1"]][e];return e>-1?n:["pr1"]},inputNumber:function(t){if(this.isModifying=!1,this.isInputting){var e=this.display.length-1;t=this.display[e]+t,i.a.set(this.display,e,t)}else this.display.push(t),this.isInputting=!0},inputModifier:function(t){if(this.isInputting=!1,this.isModifying){var e=this.display.length-1;i.a.set(this.display,e,t)}else this.display.length&&(this.display.push(t),this.isModifying=!0)},calculateInputs:function(){var t=this.display.join(""),e=new Function("return "+t)();this.display=[e]},reset:function(){this.display=[],this.isModifying=!1,this.isInputting=!1},plusMinus:function(){var t=this.display.length-1,e=this.display[t],n=this.modifierIndex(e)>-1,s=n?this.display[t]:-this.display[t];i.a.set(this.display,t,s)},removeInput:function(){var t=this.display.length-1,e=this.display[t];if(1===e.length){this.display.pop();var n=this.modifierIndex(e);n>-1?n>=2&&(this.isModifying=!1):this.isInputting=!1}else{var s=e.slice(0,-1);i.a.set(this.display,t,s)}},addParenthesis:function(t){this.display.push(t)},addZeros:function(t){}}}}},["NHnr"]);
//# sourceMappingURL=app.f75c398c9457668860cd.js.map
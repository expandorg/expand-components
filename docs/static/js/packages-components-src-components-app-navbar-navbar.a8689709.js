(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Navbar/Navbar.styl":function(e,n,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-navbar {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: 75px;\n  padding-left: 20px;\n}\n.gem-navbar__light {\n  background-color: #fff;\n}\n.gem-navbar__dark {\n  background-color: transparent;\n}\n.gem-navbar__top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-box-shadow: 0px 4px 4px #dfeeff;\n          box-shadow: 0px 4px 4px #dfeeff;\n  z-index: 2;\n}\n.gem-navbar-logo {\n  display: inline-block;\n  height: 100%;\n  width: 33px;\n  height: 33px;\n  margin-right: 20px;\n}\n.gem-navbar-logo:hover path {\n  fill: #ff4b76;\n}\n.gem-navbar-title {\n  font-family: 'Avenir';\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1;\n}\n.gem-navbar__light .gem-navbar-title {\n  color: #1c2541;\n}\n.gem-navbar__dark .gem-navbar-title {\n  color: #f3f9ff;\n}\n.gem-navbar-content {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n","",{version:3,sources:["packages/components/src/components/app/Navbar/Navbar.styl","Navbar.styl","packages/uikit/font.styl"],names:[],mappings:"AAIA;EACE,8BAAY;UAAZ,sBAAY;EAEZ,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,uBAAiB;MAAjB,oBAAiB;UAAjB,2BAAiB;EAEjB,YAAQ;EACR,kBAAc;ACLhB;ADOE;EACE,sBAAkB;ACLtB;ADOE;EACE,6BAAkB;ACLtB;ADOE;EACE,eAAU;EACV,MAAK;EACL,OAAM;EACN,QAAO;EAEP,uCAAY;UAAZ,+BAAY;EAEZ,UAAS;ACPb;ADSE;EACE,qBAAS;EACT,YAAQ;EACR,WAAO;EACP,YAAQ;EAER,kBAAc;ACRlB;ADWM;EACE,aAAyB;ACTjC;ADWE;EEpBA,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,cAAa;ADSjB;ADQI;EACE,cAAO;ACNb;ADQI;EACE,cAAO;ACNb;ADQE;EACE,YAAQ;EACR,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,mBAAW;MAAX,oBAAW;UAAX,YAAW;ACNf",file:"Navbar.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n@import '~@expandorg/uikit/size'\n\n.gem-navbar\n  box-sizing: border-box;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start\n\n  height: sz-navbar-height\n  padding-left: 20px\n\n  &__light\n    background-color: color-white;\n\n  &__dark\n    background-color: transparent;\n\n  &__top\n    position: fixed;\n    top: 0\n    left: 0\n    right: 0\n\n    box-shadow: light-shadow;\n\n    z-index: 2\n\n  &-logo\n    display: inline-block;\n    height: 100%;\n    width: 33px\n    height: 33px\n\n    margin-right: 20px\n\n    &:hover\n      path\n        fill: darken(#FF7092, 10%)\n\n  &-title\n    font(h2-title, false, false, 1)\n\n    .gem-navbar__light &\n      color: color-text-dark\n\n    .gem-navbar__dark &\n      color: color-light-blue\n\n  &-content\n    height: 100%;\n    display: flex;\n    align-items: center;\n    flex-grow: 1\n",".gem-navbar {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 75px;\n  padding-left: 20px;\n}\n.gem-navbar__light {\n  background-color: #fff;\n}\n.gem-navbar__dark {\n  background-color: transparent;\n}\n.gem-navbar__top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 4px 4px #dfeeff;\n  z-index: 2;\n}\n.gem-navbar-logo {\n  display: inline-block;\n  height: 100%;\n  width: 33px;\n  height: 33px;\n  margin-right: 20px;\n}\n.gem-navbar-logo:hover path {\n  fill: #ff4b76;\n}\n.gem-navbar-title {\n  font-family: 'Avenir';\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1;\n}\n.gem-navbar__light .gem-navbar-title {\n  color: #1c2541;\n}\n.gem-navbar__dark .gem-navbar-title {\n  color: #f3f9ff;\n}\n.gem-navbar-content {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n","font-family-base = 'Avenir'\n\nfont-preset = {\n  'h1': (300 36px 1.3),\n\n  'h2-title': (400 24px 1.3),\n  'h2-bold': (600 24px 1.3),\n\n  'h3-title': (400 18px 1.3),\n  'h3-bold': (800 18px 1.3),\n\n  'h4': (500 15px 1.3),\n  'h4-bold': (800 15px 1.3),\n\n  'body': (400 16px 1.3),\n  'body-bold': (800 16px 1.3),\n\n  'oversized': (300 96px 1.2),\n\n  'subtitle': (800 14px 1.3 0.15em),\n\n  'small-text': (400 14px 1.3),\n  'small-text-bold': (900 14px 1.3),\n\n  'navigation': (400 10px normal 0.15em),\n\n  'input-label': (800 11px normal),\n\n}\n\n\nfont-base(weight, size, line-height, letter-spacing)\n  font-family: font-family-base\n  if weight\n    font-weight: weight\n  if size\n    font-size: size\n  if line-height\n    line-height: line-height\n  if letter-spacing\n    letter-spacing: letter-spacing\n\nfont(presetName, override-weight=false, override-size=false, override-line-height=false)\n  preset = font-preset[presetName]\n  weight = preset[0]\n  if override-weight\n    weight = override-weight\n\n  size = preset[1]\n  if override-size\n    size = override-size\n\n  line-height = preset[2]\n  if override-line-height\n    line-height = override-line-height\n\n  font-base(weight, size, line-height, preset[3])\n"],sourceRoot:""}])},"./packages/components/src/components/app/Navbar/Navbar.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/classnames/index.js"),l=t.n(s),p=t("./node_modules/react-router-dom/es/Link.js");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var f=r.a.createElement("g",{id:"Desktop",fill:"#FF7092"},r.a.createElement("g",{id:"Group-16"},r.a.createElement("g",{transform:"translate(2.833333, 0.000000)",id:"Path"},r.a.createElement("polygon",{opacity:.3,points:"43.4302326 10.255814 39.0639535 13.5348837 28.127907 2.59883721"}),r.a.createElement("polygon",{opacity:.6,points:"22.2383721 0 36.1453488 13.9069767 8.33139535 13.9069767"}),r.a.createElement("polygon",{opacity:.3,points:"16.3488372 2.59883721 5.41860465 13.5348837 1.04593023 10.255814"}),r.a.createElement("polygon",{opacity:.3,points:"0 12.377907 4.18604651 15.5174419 4.18604651 15.5232558 0 30.1686047"}),r.a.createElement("polygon",{opacity:.6,points:"1.72093023 32.6046512 5.91860465 17.9011628 5.925 17.9069767 19.9244186 40.3081395 0.319767442 37.505814"}),r.a.createElement("polygon",{opacity:.3,points:"21.0755814 49.8372093 4.70348837 40.4825581 21.0755814 42.8197674"}),r.a.createElement("polygon",{points:"22.2383721 39.6162791 14.7325581 27.6104651 7.62209302 16.2325581 36.8546512 16.2325581"}),r.a.createElement("polygon",{opacity:.3,points:"23.4011628 49.8372093 23.4011628 42.8197674 39.7732558 40.4819767"}),r.a.createElement("polygon",{opacity:.6,points:"24.5523256 40.3081395 38.5523256 17.9069767 43.2209302 34.2383721 44.1569767 37.505814"}),r.a.createElement("polygon",{opacity:.3,points:"44.4767442 30.1686047 40.2906977 15.5232558 40.2906977 15.5174419 44.4767442 12.377907"})))),u=function(e){return r.a.createElement("svg",c({width:50,height:50,viewBox:"0 0 50 50"},e),f)};t.p,t("./packages/components/src/components/app/Navbar/Navbar.styl");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,n){return(A=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h,y,v,x=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,g(n).apply(this,arguments))}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&A(e,n)}(n,o["Component"]),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.children,t=e.title,o=e.top,a=e.menu,i=e.theme,s=e.className,c=l()("gem-navbar","gem-navbar__".concat(i),{"gem-navbar__top":o},s);return r.a.createElement("div",{className:c},r.a.createElement(p.a,{to:"/",className:"gem-navbar-logo"},r.a.createElement(u,{width:"33",height:"33",viewBox:"0 0 50 50"})),r.a.createElement("h1",{className:"gem-navbar-title"},t),r.a.createElement("div",{className:"gem-navbar-content"},n),a)}}])&&m(t.prototype,a),i&&m(t,i),n}();function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,n){return!n||"object"!==E(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}v={className:null,title:"",theme:"light",top:!0,menu:null},(y="defaultProps")in(h=x)?Object.defineProperty(h,y,{value:v,enumerable:!0,configurable:!0,writable:!0}):h[y]=v,x.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1,description:""},theme:{defaultValue:{value:"'light'",computed:!1},type:{name:"enum",value:[{value:"'dark'",computed:!1},{value:"'light'",computed:!1}]},required:!1,description:""},top:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},menu:{defaultValue:{value:"null",computed:!1},type:{name:"element"},required:!1,description:""}}},t.d(n,"default",function(){return O});var O=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=k(this,j(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=_(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"navbar"}},"Navbar"),r.a.createElement(i.e,{__codesandbox:"undefined",__position:0,__code:'<Navbar title="Test" top={false} />',__scope:{props:this?this.props:t,Navbar:x}},r.a.createElement(x,{title:"Test",top:!1})),r.a.createElement(i.f,{of:x}))}}])&&w(t.prototype,o),s&&w(t,s),n}();O.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/components/src/components/app/Navbar/Navbar.styl":function(e,n,t){var o=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Navbar/Navbar.styl");"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},a=t("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Navbar/Navbar.styl",function(){var n=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Navbar/Navbar.styl");if("string"===typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,o=0;for(t in e){if(!n||e[t]!==n[t])return!1;o++}for(t in n)o--;return 0===o}(o.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})}}]);
//# sourceMappingURL=packages-components-src-components-app-navbar-navbar.66cbae967e89b9cb685e.js.map
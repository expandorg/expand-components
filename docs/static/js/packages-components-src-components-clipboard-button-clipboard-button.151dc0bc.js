(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl":function(e,n,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-panel {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  -webkit-box-shadow: 0px 4px 4px #dfeeff;\n          box-shadow: 0px 4px 4px #dfeeff;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/packages/components/src/components/Panel/Panel.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/Panel.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EACZ,aAAS;EAET,gBAAY;EACZ,uCAAY;UAAZ,+BAAY;ACHd",file:"Panel.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n\n.gem-panel\n  box-sizing: border-box\n  padding: 30px\n\n  background: color-white\n  box-shadow: light-shadow\n",".gem-panel {\n  box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  box-shadow: 0px 4px 4px #dfeeff;\n}\n"]}])},"./packages/components/src/components/ClipboardButton/ClipboardButton.js":function(e,n,o){"use strict";o.d(n,"a",function(){return u});var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=o("./node_modules/react/index.js"),p=o.n(l),d=o("./packages/components/node_modules/clipboard/dist/clipboard.js"),i=o.n(d),u=function(e){function n(){var e,o;Object(s.a)(this,n);for(var t=arguments.length,r=new Array(t),p=0;p<t;p++)r[p]=arguments[p];return(o=Object(a.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(r)))).buttonRef=Object(l.createRef)(),o.getText=function(){return o.props.value},o}return Object(r.a)(n,e),Object(t.a)(n,[{key:"componentDidMount",value:function(){this.clipboard=new i.a(this.buttonRef.current,{text:this.getText})}},{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"render",value:function(){var e=this.props,n=e.children,o=e.className;return p.a.createElement("button",{ref:this.buttonRef,className:o,type:"button"},n)}}]),n}(l.Component);u.defaultProps={value:"",className:null},"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClipboardButton",filename:"packages/components/src/components/ClipboardButton/ClipboardButton.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ClipboardButton",filename:"packages/components/src/components/ClipboardButton/ClipboardButton.js"}})},"./packages/components/src/components/ClipboardButton/ClipboardButton.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return d});var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),c=o("./packages/components/src/components/ClipboardButton/ClipboardButton.js"),r=o("./packages/components/src/components/Panel/Panel.js"),l={},p="wrapper";function d(e){var n=e.components,o=Object(s.a)(e,["components"]);return Object(t.b)(p,Object.assign({},l,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"clipboardbutton"},"ClipboardButton"),Object(t.b)(a.c,{__position:0,__code:"() => (\n  <Pane>\n    <ClipboardButton value={'copy me'}>Copy me</ClipboardButton>\n  </Pane>\n)",__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,ClipboardButton:c.a,Pane:r.a},__codesandbox:"undefined",mdxType:"Playground"},function(){return Object(t.b)(r.a,{mdxType:"Pane"},Object(t.b)(c.a,{value:"copy me",mdxType:"ClipboardButton"},"Copy me"))}),Object(t.b)(a.d,{of:c.a,mdxType:"Props"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/components/src/components/ClipboardButton/ClipboardButton.mdx"}}),d.isMDXComponent=!0},"./packages/components/src/components/Panel/Panel.js":function(e,n,o){"use strict";o.d(n,"a",function(){return r});var s=o("./node_modules/react/index.js"),t=o.n(s),a=o("./node_modules/classnames/index.js"),c=o.n(a);o("./packages/components/src/components/Panel/Panel.styl");function r(e){var n=e.children,o=e.className;return t.a.createElement("div",{className:c()("gem-panel",o)},n)}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Panel",filename:"packages/components/src/components/Panel/Panel.js"}}),r.defaultProps={className:null}},"./packages/components/src/components/Panel/Panel.styl":function(e,n,o){var s=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof s&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1},a=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,t);s.locals&&(e.exports=s.locals),s.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl",function(){var n=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)}),e.hot.dispose(function(){a()})}}]);
//# sourceMappingURL=packages-components-src-components-clipboard-button-clipboard-button.9f1c6de358f0e6f83d03.js.map
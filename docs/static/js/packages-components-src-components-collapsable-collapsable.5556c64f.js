(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./node_modules/@svgr/webpack/lib/index.js?-prettier,-svgo!./packages/uikit/assets/arrow-down.svg":function(e,n,s){"use strict";s.d(n,"a",(function(){return r}));var o=s("./node_modules/react/index.js"),t=s.n(o);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e}).apply(this,arguments)}var l=t.a.createElement("path",{d:"M10.6441 0.642857C10.6441 0.291294 10.3528 0 10.0013 0H1.00126C0.649693 0 0.358398 0.291294 0.358398 0.642857C0.358398 0.813616 0.428711 0.97433 0.549247 1.09487L5.04925 5.59487C5.16978 5.7154 5.3305 5.78571 5.50126 5.78571C5.67201 5.78571 5.83273 5.7154 5.95326 5.59487L10.4533 1.09487C10.5738 0.97433 10.6441 0.813616 10.6441 0.642857Z"}),r=function(e){return t.a.createElement("svg",a({width:11,height:6,viewBox:"0 0 11 6",fill:"none"},e),l)};s.p},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Collapsable/Collapsable.styl":function(e,n,s){(e.exports=s("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-collapsable {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #8cbbee;\n}\n.gem-collapsable-header {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  height: 40px;\n  font-family: 'Avenir';\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.3;\n  color: #1c2541;\n}\n-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n-arrow path {\n  fill: #8cbbee;\n}\n-content {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/Collapsable/packages/components/src/components/Collapsable/Collapsable.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/Collapsable/Collapsable.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/Collapsable/packages/uikit/font.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EAEZ,oBAAgB;EAChB,gCAAe;ACHjB;ADKE;EACE,8BAAY;UAAZ,sBAAY;EACZ,kBAAU;EAEV,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,yBAAiB;MAAjB,sBAAiB;UAAjB,8BAAiB;EAEjB,yBAAa;KAAb,sBAAa;MAAb,qBAAa;UAAb,iBAAa;EACb,eAAQ;EAER,YAAO;EEET,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,gBAAa;EFLb,cAAO;ACJX;ADMC;EACG,kBAAS;EACT,QAAO;EACP,QAAK;ACJT;ADMI;EACE,aAAK;ACJX;ADME;EACE,8BAAY;UAAZ,sBAAY;EACZ,gBAAS;ACJb",file:"Collapsable.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n\n.gem-collapsable\n  box-sizing: border-box;\n\n  padding-bottom: 10px\n  border-bottom: 1px solid color-heavy-blue\n\n  &-header\n    box-sizing: border-box;\n    position: relative\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    user-select: none;\n    cursor: pointer;\n\n    height 40px\n\n    font(h2-title)\n    color: color-text-dark\n\n &-arrow\n    position absolute\n    right: 0\n    top: 50%\n\n    path\n      fill color-heavy-blue\n\n  &-content\n    box-sizing: border-box;\n    overflow hidden\n\n",".gem-collapsable {\n  box-sizing: border-box;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #8cbbee;\n}\n.gem-collapsable-header {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  user-select: none;\n  cursor: pointer;\n  height: 40px;\n  font-family: 'Avenir';\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.3;\n  color: #1c2541;\n}\n-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n-arrow path {\n  fill: #8cbbee;\n}\n-content {\n  box-sizing: border-box;\n  overflow: hidden;\n}\n","font-family-base = 'Avenir'\n\nfont-preset = {\n  'h1': (300 36px 1.3),\n\n  'h2-title': (400 24px 1.3),\n  'h2-bold': (500 24px 1.3),\n\n  'h3-title': (400 18px 1.3),\n  'h3-bold': (800 18px 1.3),\n\n  'h4': (500 15px 1.3),\n  'h4-bold': (800 15px 1.3),\n\n  'body': (400 16px 1.3),\n  'body-bold': (800 16px 1.3),\n\n  'oversized': (300 96px 1.2),\n\n  'subtitle': (800 12px 16px 0.15em),\n\n  'small-text': (400 14px 1.3),\n  'small-text-bold': (900 14px 1.3),\n\n  'navigation': (400 10px normal 0.15em),\n\n  'input-label': (800 11px normal),\n}\n\n\nfont-base(weight, size, line-height, letter-spacing)\n  font-family: font-family-base\n  if weight\n    font-weight: weight\n  if size\n    font-size: size\n  if line-height\n    line-height: line-height\n  if letter-spacing\n    letter-spacing: letter-spacing\n\nfont(presetName, override-weight=false, override-size=false, override-line-height=false)\n  preset = font-preset[presetName]\n  weight = preset[0]\n  if override-weight\n    weight = override-weight\n\n  size = preset[1]\n  if override-size\n    size = override-size\n\n  line-height = preset[2]\n  if override-line-height\n    line-height = override-line-height\n\n  font-base(weight, size, line-height, preset[3])\n"]}])},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl":function(e,n,s){(e.exports=s("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-panel {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  -webkit-box-shadow: 0px 4px 4px #dfeeff;\n          box-shadow: 0px 4px 4px #dfeeff;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/packages/components/src/components/Panel/Panel.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/Panel.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EACZ,aAAS;EAET,gBAAY;EACZ,uCAAY;UAAZ,+BAAY;ACHd",file:"Panel.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n\n.gem-panel\n  box-sizing: border-box\n  padding: 30px\n\n  background: color-white\n  box-shadow: light-shadow\n",".gem-panel {\n  box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  box-shadow: 0px 4px 4px #dfeeff;\n}\n"]}])},"./packages/components/src/components/Collapsable/Collapsable.js":function(e,n,s){"use strict";s.d(n,"a",(function(){return g}));var o=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=s("./node_modules/react/index.js"),p=s.n(i),c=s("./node_modules/classnames/index.js"),d=s.n(c),b=s("./node_modules/react-spring/renderprops.js"),m=s("./node_modules/@svgr/webpack/lib/index.js?-prettier,-svgo!./packages/uikit/assets/arrow-down.svg"),u=(s("./packages/components/src/components/Collapsable/Collapsable.styl"),{from:{maxHeight:0,height:"0%"},enter:{maxHeight:1e4,height:"100%"},leave:{maxHeight:0,pointerEvents:"none",height:"0%"}}),g=function(e){function n(){var e,s;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(s=Object(a.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(r)))).handleToggle=function(){var e=s.props,n=e.expanded;(0,e.onToggle)(!n)},s}return Object(r.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){var e=this.props,n=e.header,s=e.expanded,o=e.children,t=e.className;return p.a.createElement("div",{className:d()("gem-collapsable",t)},p.a.createElement("div",{className:"gem-collapsable-header",onClick:this.handleToggle},n,p.a.createElement(m.a,{className:"gem-collapsable-arrow"})),p.a.createElement(b.Transition,{native:!0,items:s,from:u.from,enter:u.enter,leave:u.leave},(function(e){return e&&function(e){return p.a.createElement(b.animated.div,{style:e,className:"gem-collapsable-content"},o)}})))}}]),n}(i.Component);g.defaultProps={className:null},"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsable",filename:"packages/components/src/components/Collapsable/Collapsable.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsable",filename:"packages/components/src/components/Collapsable/Collapsable.js"}})},"./packages/components/src/components/Collapsable/Collapsable.mdx":function(e,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return d}));var o=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=(s("./node_modules/react/index.js"),s("./node_modules/@mdx-js/react/dist/index.es.js")),a=s("./node_modules/docz/dist/index.esm.js"),l=s("./scripts/docz/WithState.js"),r=s("./packages/components/src/components/Collapsable/Collapsable.js"),i=s("./packages/components/src/components/Panel/Panel.js"),p={},c="wrapper";function d(e){var n=e.components,s=Object(o.a)(e,["components"]);return Object(t.b)(c,Object.assign({},p,s,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"collapsable"},"Collapsable"),Object(t.b)(a.c,{__position:0,__code:'() => (\n  <WithState value={false}>\n    {({ value, onChange }) => (\n      <Pane>\n        <Collapsable\n          header="collapse/expand"\n          expanded={value}\n          onToggle={onChange}\n        >\n          <h3>Hidden</h3>\n        </Collapsable>\n      </Pane>\n    )}\n  </WithState>\n)',__scope:{props:this?this.props:s,Playground:a.c,Props:a.d,WithState:l.a,Collapsable:r.a,Pane:i.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){return Object(t.b)(l.a,{value:!1,mdxType:"WithState"},(function(e){var n=e.value,s=e.onChange;return Object(t.b)(i.a,{mdxType:"Pane"},Object(t.b)(r.a,{header:"collapse/expand",expanded:n,onToggle:s,mdxType:"Collapsable"},Object(t.b)("h3",null,"Hidden")))}))})),Object(t.b)(a.d,{of:r.a,mdxType:"Props"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/components/src/components/Collapsable/Collapsable.mdx"}}),d.isMDXComponent=!0},"./packages/components/src/components/Collapsable/Collapsable.styl":function(e,n,s){var o=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Collapsable/Collapsable.styl");"string"===typeof o&&(o=[[e.i,o,""]]);var t={insert:"head",singleton:!1},a=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(o,t);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Collapsable/Collapsable.styl",(function(){var n=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Collapsable/Collapsable.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))},"./packages/components/src/components/Panel/Panel.js":function(e,n,s){"use strict";s.d(n,"a",(function(){return r}));var o=s("./node_modules/react/index.js"),t=s.n(o),a=s("./node_modules/classnames/index.js"),l=s.n(a);s("./packages/components/src/components/Panel/Panel.styl");function r(e){var n=e.children,s=e.className;return t.a.createElement("div",{className:l()("gem-panel",s)},n)}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Panel",filename:"packages/components/src/components/Panel/Panel.js"}}),r.defaultProps={className:null}},"./packages/components/src/components/Panel/Panel.styl":function(e,n,s){var o=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof o&&(o=[[e.i,o,""]]);var t={insert:"head",singleton:!1},a=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(o,t);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl",(function(){var n=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))},"./scripts/docz/WithState.js":function(e,n,s){"use strict";s.d(n,"a",(function(){return p}));var o=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=s("./node_modules/react/index.js"),p=function(e){function n(e){var s;return Object(o.a)(this,n),(s=Object(a.a)(this,Object(l.a)(n).call(this,e))).handleChange=function(e){s.setState({value:e})},s.state={value:e.value},s}return Object(r.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){var e=this.props.children,n=this.state.value;return e({onChange:this.handleChange,value:n})}}]),n}(i.Component);p.defaultProps={value:void 0},"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WithState",filename:"scripts/docz/WithState.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WithState",filename:"scripts/docz/WithState.js"}})}}]);
//# sourceMappingURL=packages-components-src-components-collapsable-collapsable.1360e764b21138036cab.js.map
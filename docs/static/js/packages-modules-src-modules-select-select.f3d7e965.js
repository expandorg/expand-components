(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"./packages/modules/src/modules/Select/Select.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),s=n("./packages/modules/src/form/components/Playground/ModulesPlayground.js"),c={},r="wrapper";function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)(r,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"select-module"},"Select Module"),Object(b.b)("h2",{id:"select-properties"},"Select properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"type"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"type")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"select")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"module type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"name")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"module name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"idType")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"none"),", ",Object(b.b)("inlineCode",{parentName:"td"},"small"),", ",Object(b.b)("inlineCode",{parentName:"td"},"capital"),", ",Object(b.b)("inlineCode",{parentName:"td"},"roman"),", ",Object(b.b)("inlineCode",{parentName:"td"},"numerals")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"numerals"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"enumerator type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"columns")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1"),",",Object(b.b)("inlineCode",{parentName:"td"},"2"),", ",Object(b.b)("inlineCode",{parentName:"td"},"3")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"2")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"number of columns")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"options")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[ string, string... ]")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"array of options")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"readOnly")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),"read only")))),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"{\n  name: 'select',\n  type: 'select',\n  idType: 'small',\n  options: ['Option 1', 'Option 2', 'Option 2', 'Option 4'],\n}\n")),Object(b.b)(l.c,{__position:0,__code:"<ModulesPlayground\n  form={{\n    modules: [\n      {\n        name: 'text',\n        type: 'type',\n        style: 'h3',\n        content: 'Select one',\n      },\n      {\n        name: 'select',\n        type: 'select',\n        idType: 'none',\n        columns: 1,\n        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],\n      },\n      {\n        name: 'submit',\n        type: 'submit',\n        caption: 'Next',\n      },\n    ],\n  }}\n/>",__scope:{props:this?this.props:n,Playground:l.c,ModulesPlayground:s.a},__codesandbox:"undefined",mdxType:"Playground"},Object(b.b)(s.a,{form:{modules:[{name:"text",type:"type",style:"h3",content:"Select one"},{name:"select",type:"select",idType:"none",columns:1,options:["Option 1","Option 2","Option 3","Option 4"]},{name:"submit",type:"submit",caption:"Next"}]},mdxType:"ModulesPlayground"})))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/modules/src/modules/Select/Select.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=packages-modules-src-modules-select-select.9f1c6de358f0e6f83d03.js.map
System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-ui/basic/color-picker","jimu-ui/advanced/resource-selector","jimu-ui/advanced/style-setting-components"],(function(e,t){var a={},o={},n={},i={},l={},s={},r={},u={};return{setters:[function(e){a.Immutable=e.Immutable,a.LayoutItemType=e.LayoutItemType,a.React=e.React,a.ReactRedux=e.ReactRedux,a.css=e.css,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.polished=e.polished},function(e){o.DirectionSelector=e.DirectionSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){n.Label=e.Label,n.MultiSelect=e.MultiSelect,n.NumericInput=e.NumericInput,n.Radio=e.Radio,n.Select=e.Select,n.Switch=e.Switch,n.Tab=e.Tab,n.Tabs=e.Tabs,n.TextInput=e.TextInput,n.defaultMessages=e.defaultMessages,n.hooks=e.hooks},function(e){i.searchUtils=e.searchUtils},function(e){l.getNavigationVariables=e.getNavigationVariables,l.useTheme2=e.useTheme2},function(e){s.ThemeColorPicker=e.ThemeColorPicker},function(e){r.IconPicker=e.IconPicker},function(e){u.InputUnit=e.InputUnit,u.NavIconPicker=e.NavIconPicker,u.NavStyleSettingByState=e.NavStyleSettingByState,u.TextAlignment=e.TextAlignment}],execute:function(){e((()=>{var e={48891:e=>{"use strict";e.exports=a},74758:e=>{"use strict";e.exports=i},34796:e=>{"use strict";e.exports=l},30726:e=>{"use strict";e.exports=n},20663:e=>{"use strict";e.exports=r},77756:e=>{"use strict";e.exports=o},55505:e=>{"use strict";e.exports=u},41362:e=>{"use strict";e.exports=s}},t={};function c(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,c),n.exports}c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var d={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(d),c.d(d,{default:()=>b});var e,t=c(48891),a=c(77756);!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(e||(e={}));var o=c(30726),n=c(74758),i=c(34796);const{useMemo:l}=t.React,s=()=>(0,t.getAppStore)().getState().appStateInBuilder.appConfig,r=e=>{const a=(e=>{var t;const a=s();return null!==(t=null==e?void 0:e.map((e=>{var t,o;return{label:null===(o=null===(t=a.views)||void 0===t?void 0:t[e])||void 0===o?void 0:o.label,value:e}})))&&void 0!==t?t:[]})(e);return(0,t.Immutable)(a)},u=(e,a)=>{var o;const n=(0,i.getNavigationVariables)();let l=null===(o=null==n?void 0:n[e])||void 0===o?void 0:o[a];return l=(0,t.Immutable)(l).merge({item:{default:{icon:{size:"8px"},size:"14px"},active:{icon:{color:"var(--primary)",size:"8px"},size:"14px"},hover:{icon:{color:"var(--primary)",size:"8px"},size:"14px"}}},{deep:!0}),l};var v=c(41362);const p="default",m=t.css`
  .tab-title-item{
    width: 33%;
  }
`,g=e=>{var n,l,s,r;const u=(0,i.useTheme2)(),{hideThumb:c,variant:d,onChange:g}=e,x=o.hooks.useTranslate(),w=null===(n=null==d?void 0:d.track)||void 0===n?void 0:n.bg,h=null===(l=null==d?void 0:d.progress)||void 0===l?void 0:l[p],b=null===(s=null==d?void 0:d.thumb)||void 0===s?void 0:s[p];return(0,t.jsx)(a.SettingRow,null,(0,t.jsx)(o.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:m,defaultValue:"active"},(0,t.jsx)(o.Tab,{id:"active",title:x("active"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:x("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:h.bg,onChange:e=>g(["display","variant","progress",p,"bg"],e)}))),!c&&(0,t.jsx)(o.Tab,{id:"thumb",title:x("thumb"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:x("fill"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:null==b?void 0:b.bg,onChange:e=>g(["display","variant","thumb",p,"bg"],e)})),(0,t.jsx)(a.SettingRow,{label:x("border"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:null===(r=null==b?void 0:b.border)||void 0===r?void 0:r.color,onChange:e=>g(["display","variant","thumb",p,"border","color"],e)}))),(0,t.jsx)(o.Tab,{id:"inactive",title:x("inactive"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:x("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:u,value:w,onChange:e=>g(["display","variant","track","bg"],e)})))))};var x=c(20663),w=c(55505);const h={_widgetLabel:"Views Navigation",tabStyle:"Tab style",navBtnStyle:"Navigation button style"},b=c=>{var d,p,m;const b=(0,i.useTheme2)(),S=o.hooks.useTranslate(o.defaultMessages,h),{config:y,id:j,onSettingChange:f,theme:T}=c,R=null!==(d=null==y?void 0:y.data)&&void 0!==d?d:(0,t.Immutable)({}),C=null!==(p=null==y?void 0:y.display)&&void 0!==p?p:(0,t.Immutable)({}),{section:I,type:k,views:N}=R,{vertical:A,type:B,navStyle:P,variant:z,advanced:M,standard:O}=C,{showIcon:V,showText:L,showTitle:U,alternateIcon:$,activedIcon:F,previousText:G,previousIcon:D,nextText:_,nextIcon:H,hideThumb:E,step:W=1,textAlign:q,gap:J}=O||{},K=((e,t,a,o)=>l((()=>a?o:u(e,t)),[a,o,e,t]))(B,P,M,z),Q=null===(m=null==K?void 0:K.root)||void 0===m?void 0:m.bg,X=(e=>{const a=t.ReactRedux.useSelector((e=>{var t,a;return null===(a=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===a?void 0:a.layouts})),o=t.ReactRedux.useSelector((e=>{var t,a;return null===(a=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===a?void 0:a.sections})),i=t.ReactRedux.useSelector((e=>{var t;return null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode}));return t.React.useMemo((()=>{const a=(0,t.getAppStore)().getState().appStateInBuilder.appConfig;return n.searchUtils.getContentsInTheSameContainer(a,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,i)||[]}),[e,i,o,a])})(j),Y=(e=>t.ReactRedux.useSelector((t=>{var a,o,n,i;return null===(i=null===(n=null===(o=null===(a=null==t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===o?void 0:o.sections)||void 0===n?void 0:n[e])||void 0===i?void 0:i.views})))(I),Z=(e=>{var a;const o=null===(a=null==e?void 0:e.colors)||void 0===a?void 0:a.palette.dark[600];return t.React.useMemo((()=>t.css`
        .jimu-multi-select {
          width: 100%;
          > .jimu-dropdown {
            width: 100%;
          }
          > .jimu-menu-item {
            width: 100%;
            height: ${t.polished.rem(26)};
          }
        }
        .radio-container {
          display: flex;
          width: 100%;
          margin-top: 0.5rem;
          > span.jimu-radio {
            flex-shrink: 0;
            margin-top: 0.1rem;
          }
          > label {
            margin-bottom: 0;
          }
        }
        .title-1 {
          > label {
            font-size: ${t.polished.rem(14)};
            color: ${o};
          }
        }
      `),[o])})(T),[ee,te]=t.React.useState(G),[ae,oe]=t.React.useState(_);t.React.useEffect((()=>{ee!==G&&te(G),ae!==_&&oe(G)}),[G,_]);const ne=(e,t)=>{f({id:j,config:Array.isArray(e)?y.setIn(e,t):y.set(e,t)})},ie=(e,t,a)=>{ne(["display","variant","item",e,t],a)};return(0,t.jsx)("div",{className:"widget-setting-navigator jimu-widget-setting",css:Z},(0,t.jsx)(a.SettingSection,null,(0,t.jsx)(a.SettingRow,{flow:"wrap",label:S("linkTo")},(0,t.jsx)(o.Select,{size:"sm",value:I,onChange:e=>ne(["data","section"],e.target.value)},X.map(((e,a)=>(0,t.jsx)("option",{key:a,value:e},(e=>{var t,a,o;const n=s();return null!==(o=null===(a=null===(t=null==n?void 0:n.sections)||void 0===t?void 0:t[e])||void 0===a?void 0:a.label)&&void 0!==o?o:""})(e)))))),I&&(0,t.jsx)(t.React.Fragment,null,"nav"===B&&(0,t.jsx)(a.SettingRow,{label:S("views"),flow:"wrap"},(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(o.Radio,{id:"view-type-auto",style:{cursor:"pointer"},name:"view-type",onChange:t=>ne(["data","type"],e.Auto),checked:k===e.Auto}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"view-type-auto",className:"ml-2"},S("auto"))),(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(o.Radio,{id:"view-type-custom",style:{cursor:"pointer"},name:"view-type",onChange:t=>ne(["data","type"],e.Custom),checked:k===e.Custom}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"view-type-custom",className:"ml-2"},S("custom")))),k===e.Custom&&(0,t.jsx)(a.SettingRow,{flow:"wrap"},(0,t.jsx)(o.MultiSelect,{values:N,items:r(Y),onClickItem:(e,t,a)=>{a.sort(((e,t)=>(null==Y?void 0:Y.indexOf(e))-(null==Y?void 0:Y.indexOf(t)))),ne(["data","views"],a)},displayByValues:e=>{const t=e?e.length:0;return S("viewsSelected",{viewNumber:t})}})),"slider"!==B&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("direction")},(0,t.jsx)(a.DirectionSelector,{vertical:A,onChange:e=>ne(["display","vertical"],e)})),"nav"===B&&(0,t.jsx)(a.SettingRow,{label:S("space"),flow:"no-wrap"},(0,t.jsx)(w.InputUnit,{size:"sm",className:"w-50",value:J,onChange:e=>ne(["display","standard","gap"],`${e.distance}${e.unit}`)})),"nav"===B&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("alignment")},(0,t.jsx)(w.TextAlignment,{textAlign:q,onChange:e=>ne(["display","standard","textAlign"],e)})),"nav"===B&&V&&!L&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("tooltip")},(0,t.jsx)(o.Switch,{checked:U,onChange:()=>ne(["display","standard","showTitle"],!U)})),"nav"===B&&V&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("symbol"),className:"title-1"}),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("currentView")},(0,t.jsx)(w.NavIconPicker,{configurableOption:"none",hideRemove:!0,size:8,icon:F,onChange:e=>ne(["display","standard","activedIcon"],e)})),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("others")},(0,t.jsx)(w.NavIconPicker,{configurableOption:"none",hideRemove:!0,size:8,icon:$,onChange:e=>ne(["display","standard","alternateIcon"],e)}))),"navButtonGroup"===B&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("step")},(0,t.jsx)(o.NumericInput,{size:"sm",value:W,style:{width:"27%"},showHandlers:!1,min:.1,max:1,onAcceptValue:e=>ne(["display","standard","step"],+e)})),"navButtonGroup"===B&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"wrap",label:S("previous"),className:"justify-content-between"},(0,t.jsx)(o.TextInput,{size:"sm",style:{width:"61%"},value:ee,onChange:e=>{const t=e.target.value;te(t)},onAcceptValue:e=>ne(["display","standard","previousText"],e)}),(0,t.jsx)(x.IconPicker,{configurableOption:"none",icon:D,onChange:e=>ne(["display","standard","previousIcon"],e)})),(0,t.jsx)(a.SettingRow,{flow:"wrap",label:S("next"),className:"justify-content-between"},(0,t.jsx)(o.TextInput,{size:"sm",style:{width:"61%"},value:ae,onChange:e=>{const t=e.target.value;oe(t)},onAcceptValue:e=>ne(["display","standard","nextText"],e)}),(0,t.jsx)(x.IconPicker,{configurableOption:"none",icon:H,onChange:e=>ne(["display","standard","nextIcon"],e)}))),"slider"===B&&(0,t.jsx)(a.SettingRow,{label:S("thumbHandle"),flow:"no-wrap"},(0,t.jsx)(o.Switch,{checked:!E,onChange:()=>ne(["display","standard","hideThumb"],!E)})))),I&&(0,t.jsx)(a.SettingSection,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:S("advance")},(0,t.jsx)(o.Switch,{checked:M,onChange:()=>{const e=!(null==y?void 0:y.display.advanced);let t=y.display.set("advanced",e);if(e){const e=u(B,P);t=t.set("variant",e)}else t=t.set("variant",void 0);ne("display",t)}})),M&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{label:S("background"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:b,value:Q,onChange:e=>ne(["display","variant","root","bg"],e)})),"nav"===B&&!V&&(0,t.jsx)(a.SettingRow,{label:S("tabStyle"),flow:"no-wrap"}),"navButtonGroup"===B&&(0,t.jsx)(a.SettingRow,{label:S("navBtnStyle"),flow:"no-wrap"}),"nav"===B&&(0,t.jsx)(w.NavStyleSettingByState,{variant:K,onlyBorderColor:"underline"===P,text:L,icon:V,onChange:ie}),"slider"===B&&(0,t.jsx)(g,{hideThumb:E,variant:K,onChange:ne}),"navButtonGroup"===B&&(0,t.jsx)(w.NavStyleSettingByState,{variant:K,states:["default","hover","disabled"],onlyBorderColor:!1,text:!0,icon:!1,iconInText:!0,onChange:ie}))))}})(),d})())}}}));
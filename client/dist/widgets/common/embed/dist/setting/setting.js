System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/dynamic-url-editor"],(function(e,t){var s={},a={},o={},r={},i={},n={};return{setters:[function(e){s.Immutable=e.Immutable,s.React=e.React,s.classNames=e.classNames,s.css=e.css,s.jsx=e.jsx},function(e){a.builderAppSync=e.builderAppSync},function(e){o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){r.AdvancedButtonGroup=e.AdvancedButtonGroup,r.Button=e.Button,r.Icon=e.Icon,r.NumericInput=e.NumericInput,r.Switch=e.Switch,r.TextArea=e.TextArea,r.TextInput=e.TextInput,r.defaultMessages=e.defaultMessages},function(e){i.AllDataSourceTypes=e.AllDataSourceTypes,i.DataSourceSelector=e.DataSourceSelector},function(e){n.DynamicUrlEditor=e.DynamicUrlEditor}],execute:function(){e((()=>{var e={79964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125L14.334 14H1.667L8 2.125zm-.882-.47a1 1 0 011.765 0l6.333 11.874A1 1 0 0114.334 15H1.667a1 1 0 01-.882-1.47L7.118 1.653zM8 4.874a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0L8.9 5.87a.905.905 0 00-.9-.995zm1 7a1 1 0 11-2 0 1 1 0 012 0z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=s},23137:e=>{"use strict";e.exports=a},30726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=i},9689:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=o}},t={};function l(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{default:()=>h});var e=l(48891),t=l(23137),s=l(77756),a=l(30726);const o={_widgetLabel:"Embed",websiteAddress:"Website address",code:"Code",codePlaceholder:"Paste the HTML code you want to embed.",embedBy:"Embed by",attributeHint:"URL from an attribute",expressionHint:"URL by an expression",autoRefresh:"Auto refresh",autoInterval:"Interval",autoUnit:"Minute",reloadSetting:"Do not reload iframe when URL changes",maxLimit:"Maximum character limit exceeded."};var r;!function(e){e.Url="url",e.Code="code"}(r||(r={}));var i=l(338),n=l(9689),d=l(79964),u=l.n(d);const p=t=>{const{className:s}=t,o=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(s[a[o]]=e[a[o]])}return s}(t,["className"]),r=(0,e.classNames)("jimu-icon-component",s);return e.React.createElement(a.Icon,Object.assign({className:r,icon:u()},o))};class h extends e.React.PureComponent{constructor(s){super(s),this.supportedDsTypes=(0,e.Immutable)([i.AllDataSourceTypes.FeatureLayer,i.AllDataSourceTypes.SceneLayer]),this.embedTypeChange=e=>{const{config:t}=this.props;e===r.Url&&this.setState({showCodeError:!1}),t.embedType!==e&&this.props.onSettingChange({id:this.props.id,config:t.set("embedType",e)})},this.checkURL=e=>{if(!e||""===e)return this.setState({urlError:""}),!0;if(!new RegExp("^(([h][t]{2}[p][s])?://)").test(e))return this.setState({urlError:this.formatMessage("httpsUrlMessage")}),!1;if(new RegExp("^(([h][t]{2}[p][s])?://localhost)").test(e))return this.setState({urlError:""}),!0;const t=e.indexOf(".");return t<0||t===e.length-1?(this.setState({urlError:this.formatMessage("invalidUrlMessage")}),!1):(this.setState({urlError:""}),!0)},this.embedCodeChangeRightAway=e=>{const{config:s,id:a}=this.props;if((null==e?void 0:e.length)>8192)return this.setState({showCodeError:!0}),void t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:a,propKey:"codeLimitExceeded",value:!0});this.setState({showCodeError:!1}),t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:a,propKey:"codeLimitExceeded",value:!1}),this.props.onSettingChange({config:s.set("embedCode",e),id:a})},this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:Object.assign(Object.assign({},a.defaultMessages),o)[e]}),this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onSwitchChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.handleAutoInterval=e=>{const{config:t,id:s}=this.props;this.props.onSettingChange({id:s,config:t.set("autoInterval",e)})},this.labelChange=e=>{var t;const{config:s,id:a}=this.props,o=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.props.onSettingChange({id:a,config:s.set("label",o)})},this.webAddressExpressionChange=e=>{const{config:t,onSettingChange:s,id:a,useDataSourcesEnabled:o,useDataSources:i}=this.props,{embedType:n}=t,l=/\<exp((?!\<exp).)+\<\/exp\>/gim,c=null==e?void 0:e.match(/\<urlsearch((?!\<urlsearch).)+\<\/urlsearch\>/gim),d=null==e?void 0:e.match(l),u=e&&e.replace(/<[^>]+>/g,"").replace(/(^\s*|\s*$)/g,"");(c||d)&&0===u.indexOf("{")||this.checkURL(u)?this.setState({showUrlError:!1}):this.setState({showUrlError:!0});const p=null==e?void 0:e.match(l);s(n===r.Url&&o&&(null==i?void 0:i.length)>0&&p?{id:a,config:t.set("expression",e)}:{id:a,config:t.set("expression",e).set("enableLabel",!1)})},this.isUsedDataSource=()=>{const{useDataSources:e,useDataSourcesEnabled:t}=this.props;return t&&e&&e.length>0},this.hasExpressionTag=e=>null==e?void 0:e.match(/\<exp((?!\<exp).)+\<\/exp\>/gim),this.state={showUrlError:!1,urlError:"",isExpPopupOpen:!1,showCodeError:!1}}componentWillUnmount(){t.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"codeLimitExceeded",value:!1})}render(){const{showUrlError:t,urlError:o,showCodeError:l}=this.state,{theme:c,useDataSources:d,config:u,useDataSourcesEnabled:h,id:g,selectWidgets:m}=this.props,{embedType:x,enableLabel:f,label:b}=u,S=x===r.Url&&h&&(null==d?void 0:d.length)>0&&this.hasExpressionTag(u.expression);return(0,e.jsx)("div",{css:(this.props.theme,e.css`
    label {
      cursor: pointer;
    }
    .embed-dynamic-con{
      z-index: 3;
      .ql-editor{
        min-height: 174px;
      }
    }
  `)},(0,e.jsx)("div",{className:"widget-iframe jimu-widget"},(0,e.jsx)("div",null,(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,{label:this.formatMessage("embedBy")}),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.AdvancedButtonGroup,{className:"w-100"},(0,e.jsx)(a.Button,{className:"w-50","aria-label":`${this.formatMessage("embedBy")} ${this.formatMessage("url")}`,active:x===r.Url,onClick:()=>this.embedTypeChange(r.Url)},this.formatMessage("url")),(0,e.jsx)(a.Button,{className:"w-50","aria-label":`${this.formatMessage("embedBy")} ${this.formatMessage("code")}`,active:x===r.Code,onClick:()=>this.embedTypeChange(r.Code)},this.formatMessage("code")))),x===r.Url&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"choose-ds w-100"},(0,e.jsx)(i.DataSourceSelector,{types:this.supportedDsTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:h,onToggleUseDataEnabled:this.onToggleUseDataEnabled,onChange:this.onDataSourceChange,widgetId:this.props.id}))),(0,e.jsx)(s.SettingRow,null,x===r.Url?(0,e.jsx)("div",{className:"d-flex flex-column w-100 embed-dynamic-con"},(0,e.jsx)(n.DynamicUrlEditor,{widgetId:g,useDataSourcesEnabled:h,useDataSources:d,selectWidgets:m,onChange:this.webAddressExpressionChange,value:u.expression}),t&&(0,e.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between",style:{marginTop:"5px"}},(0,e.jsx)(p,{color:c.colors.danger}),(0,e.jsx)("div",{style:{width:"calc(100% - 20px)",margin:"0 4px",overflow:"hidden",textOverflow:"ellipsis",color:c.colors.danger}},o))):(0,e.jsx)("div",{className:"d-flex flex-column w-100"},(0,e.jsx)(a.TextArea,{style:{height:"300px"},className:"w-100",spellCheck:!1,placeholder:this.formatMessage("codePlaceholder"),value:u.embedCode||"",onAcceptValue:this.embedCodeChangeRightAway}),l&&(0,e.jsx)("div",{className:"d-flex w-100 align-items-center justify-content-between",style:{marginTop:"5px"}},(0,e.jsx)(p,{color:c.colors.danger}),(0,e.jsx)("div",{style:{width:"calc(100% - 20px)",margin:"0 4px",overflow:"hidden",textOverflow:"ellipsis",color:c.colors.danger}},this.formatMessage("maxLimit"))))),S&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"d-flex justify-content-between w-100"},(0,e.jsx)("label",{className:"w-75 text-truncate d-inline-block font-dark-600"},this.formatMessage("label")),(0,e.jsx)(a.Switch,{className:"can-x-switch",checked:f||!1,"data-key":"enableLabel",onChange:e=>{this.onSwitchChanged(e.target.checked,"enableLabel")},"aria-label":this.formatMessage("label")}))),f&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.TextInput,{type:"text",className:"w-100",value:b||"",onChange:this.labelChange}))),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"d-flex justify-content-between w-100"},(0,e.jsx)("label",{className:"w-75 text-truncate d-inline-block font-dark-600"},this.formatMessage("autoRefresh")),(0,e.jsx)(a.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.autoRefresh||!1,"data-key":"autoRefresh",onChange:e=>{this.onSwitchChanged(e.target.checked,"autoRefresh")},"aria-label":this.formatMessage("autoRefresh")}))),u.autoRefresh&&(0,e.jsx)(s.SettingRow,{flow:"wrap",label:`${this.formatMessage("autoInterval")} (${this.formatMessage("autoUnit")})`},(0,e.jsx)(a.NumericInput,{size:"sm",style:{width:"100%"},value:u.autoInterval||1,precision:2,min:.2,max:1440,onChange:this.handleAutoInterval,"aria-label":`${this.formatMessage("autoInterval")} (${this.formatMessage("autoUnit")})`}))))))}}h.mapExtraStateProps=(e,t)=>{var s,a;const o=e&&(null===(a=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.widgets),r=[];if(o)for(const e in o){const s=o[e];"widgets/common/embed/"===s.uri&&s.id!==t.id&&r.push(s)}return{appConfig:e&&e.appStateInBuilder&&e.appStateInBuilder.appConfig,selectWidgets:r}}})(),c})())}}}));
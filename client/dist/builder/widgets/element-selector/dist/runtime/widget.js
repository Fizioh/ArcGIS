System.register(["jimu-core","jimu-for-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui"],(function(e,t){var i={},s={},o={},a={},n={};return{setters:[function(e){i.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,i.AppMode=e.AppMode,i.LayoutItemType=e.LayoutItemType,i.PagePart=e.PagePart,i.PageType=e.PageType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.WidgetType=e.WidgetType,i.appConfigUtils=e.appConfigUtils,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.i18n=e.i18n,i.injectIntl=e.injectIntl,i.jsx=e.jsx,i.moduleLoader=e.moduleLoader,i.polished=e.polished},function(e){s.builderActions=e.builderActions},function(e){o.searchUtils=e.searchUtils},function(e){a.withTheme=e.withTheme},function(e){n.Button=e.Button,n.Icon=e.Icon,n.Popper=e.Popper,n.Tab=e.Tab,n.Tabs=e.Tabs,n.TextInput=e.TextInput,n.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.27 4.936a6.5 6.5 0 11.707-.707l4.136 4.137a.5.5 0 11-.707.707l-4.137-4.137z" fill="#000"></path></svg>'},8866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 100-2 1 1 0 000 2zM6.5 7.5A.5.5 0 017 7h1.5v4.5h1a.5.5 0 010 1h-3a.5.5 0 010-1h1V8H7a.5.5 0 01-.5-.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 118 0a8 8 0 010 16zm0-1A7 7 0 108 1a7 7 0 000 14z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=i},3137:e=>{"use strict";e.exports=s},4758:e=>{"use strict";e.exports=o},4796:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=n}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>L});var e=r(8891),t=r(726),i=r(4796);class s extends e.React.PureComponent{constructor(t){super(t),this.onSelectItem=e=>{this.stopBubble(e),this.props.onSelect&&this.props.onSelect(this.props.item)},this.beginDrag=t=>{if(this.props.appMode!==e.AppMode.Design)return;const{item:i}=this.props;if(t.dataTransfer&&t.dataTransfer.setData("exbWidget",i.name||i.id),window._dragging_widget_item=Object.assign(Object.assign({},i),{count:this.uniqueId}),this.uniqueId++,!this.appFrameDoc){const t=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=t.contentDocument||t.contentWindow.document}this.appFrameDoc&&this.appFrameDoc.documentElement.classList.add("exb-h5-dragging")},this.endDrag=e=>{window._dragging_widget_item=null,this.appFrameDoc&&this.appFrameDoc.documentElement.classList.remove("exb-h5-dragging")},this.MemoChildFunctionComponent=e.React.memo((({item:t,fullLine:i})=>this.props.children?(0,e.jsx)("div",{className:"w-100 h-100"},this.props.children(t,i)):null)),this.uniqueId=0}stopBubble(e){e&&e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0)}maskStyle(){return e.css`
      position: absolute;
      user-select: none;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      cursor: default;

      &.can-drag {
        cursor: pointer;

        &:active {
          cursor: grabbing;
        }
      }
    `}render(){const{item:t,fullLine:i,appMode:s}=this.props,o=this.MemoChildFunctionComponent;return(0,e.jsx)("div",{className:(0,e.classNames)({"col-6":!i,col:i,[this.props.className]:!!this.props.className}),draggable:s===e.AppMode.Design,onClick:this.onSelectItem,onDragStart:this.beginDrag,onDragEnd:this.endDrag,key:t.name,title:t.label,"data-widget-name":t.name},"function"==typeof this.props.children?(0,e.jsx)(o,{item:t,fullLine:i}):this.props.children,(0,e.jsx)("div",{className:(0,e.classNames)({"can-drag":s===e.AppMode.Design}),css:this.maskStyle()}))}}var o=r(3137);var a=r(8866),n=r.n(a);const p=i=>{const{className:s}=i,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(i,["className"]),a=(0,e.classNames)("jimu-icon-component",s);return e.React.createElement(t.Icon,Object.assign({className:a,icon:n()},o))},d=()=>{const t="#fff",i="#5f5fff",s="0 2px 12px 0 rgba(95,95,255,0.40)",o="#fff",a="#4949ff";return e.css`
    width: 240px;
    padding: 1rem;
    h1, h2, h3, h4, h5, h6 {
      color: var(--dark-600);
    }
    .btn-primary {
      min-width: 100px;
      color: ${t};
      background-color: ${i};
      border: 1px solid transparent;
      box-shadow: ${s};
      &:hover {
        color: ${o};
        background-color: ${a};
        border: 1px solid transparent;
      }
    }
  `},c=(0,e.injectIntl)((function(i){var s,a;const{widgetItem:n,intl:r}=i,[l,c]=e.React.useState(!1),u=e.React.useRef(),m=e.React.useMemo((()=>r.formatMessage({id:"widgetHelpIconLabel",defaultMessage:"About this widget"})),[r]),h=e.React.useMemo((()=>r.formatMessage({id:"widgetGuideStart",defaultMessage:"Take a tour"})),[r]);return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.Button,{type:"tertiary",className:"widget-help-btn",icon:!0,size:"sm",title:m,onClick:()=>{c(!l)},ref:u},(0,e.jsx)(p,null),(0,e.jsx)("span",{className:"sr-only"},h),(0,e.jsx)(t.Popper,{showArrow:!0,css:d,open:l,placement:"right",offset:[0,10],reference:u.current,toggle:()=>{c(!1)}},(0,e.jsx)("h5",null,null==n?void 0:n.label),(0,e.jsx)("p",null,null==n?void 0:n.desription),(null===(a=null===(s=null==n?void 0:n.manifest)||void 0===s?void 0:s.properties)||void 0===a?void 0:a.hasGuide)&&(0,e.jsx)(t.Button,{className:"float-right",type:"primary",size:"sm",onClick:t=>{(0,e.getAppStore)().dispatch(o.builderActions.startGuide(n.uri)),c(!1)}},h))))}));class u extends e.React.PureComponent{constructor(){super(...arguments),this.getListItemJSX=({item:t,appMode:i})=>{if(!t)return(0,e.jsx)("div",{className:"col-6",style:{visibility:"hidden"}});const o=this.Item;return(0,e.jsx)(s,{item:t,fullLine:!1,className:"widget-card-item mt-2",appMode:i},(()=>(0,e.jsx)(o,{item:t,hideLabel:!1})))},this.Item=({item:i,hideLabel:s})=>{var o,a,n,r;return(0,e.jsx)("div",{className:(0,e.classNames)("d-flex justify-content-center w-100 h-100 widget-card-item-content",{"align-items-start":!s,"align-items-center":s,"pt-0":s}),key:i.name,"aria-label":i.label,tabIndex:0,role:"button"},(0,e.jsx)("div",{className:(0,e.classNames)("d-flex flex-column",{"h-100":!s})},(null===(a=null===(o=i.manifest)||void 0===o?void 0:o.properties)||void 0===a?void 0:a.hasGuide)&&(0,e.jsx)(c,{widgetItem:i}),(0,e.jsx)("div",{className:"d-flex justify-content-center"},(0,e.jsx)("div",{className:"widget-card-image"},(0,e.jsx)(t.Icon,{className:"w-100",icon:i.icon,size:20,autoFlip:null===(r=null===(n=i.manifest)||void 0===n?void 0:n.properties)||void 0===r?void 0:r.flipIcon}))),!s&&(0,e.jsx)("div",{className:(0,e.classNames)("widget-card-name flex-grow-1 d-flex align-items-center mt-0")},(0,e.jsx)("span",{className:"text-center text-truncate widget-card-name-content"},i.label))))}}render(){return this.getListItemJSX(this.props)}}function m(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}function h(e){var t,i,s;const o=Object.keys((null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||{}).map((t=>{var i;return null===(i=e.appRuntimeInfo.sectionNavInfos[t])||void 0===i?void 0:i.currentViewId}));return"insert"===(o[0]||"insert")&&(null===(s=null===(i=null==e?void 0:e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===s?void 0:s.collapse)}class g extends e.React.PureComponent{constructor(i){super(i),this.sectionItem={itemType:e.LayoutItemType.Section,label:this.props.intl.formatMessage({id:"section",defaultMessage:e.defaultMessages.section}),uri:"",manifest:{properties:{},defaultSize:{width:500,height:500}},icon:"./widgets/element-selector/dist/runtime/assets/section.svg",name:"section"},this.placeholderItem={itemType:e.LayoutItemType.Widget,label:this.props.intl.formatMessage({id:"placeholder",defaultMessage:t.defaultMessages.placeholder}),uri:null,manifest:{defaultSize:{width:300,height:300}},icon:"./widgets/element-selector/dist/runtime/assets/placeholder.svg",name:"placeholder"},this.state={selectedItemName:""}}isLoading(){return!this.props.widgetList}render(){const t=this.props.widgetList||[],i={label:this.props.intl.formatMessage({id:"basicWidget",defaultMessage:"Basic"}),groups:[]},s={label:this.props.intl.formatMessage({id:"layoutWidget",defaultMessage:"Layout"}),groups:[{groupId:8,itemList:[]}]},o={label:this.props.intl.formatMessage({id:"section",defaultMessage:e.defaultMessages.section}),groups:[{groupId:9,itemList:[]}]};return m(this.sectionItem.label,this.props.searchValue)&&o.groups[0].itemList.push(this.sectionItem),t.forEach((t=>{if(m(t.label,this.props.searchValue))if(t.manifest.widgetType===e.WidgetType.Layout)s.groups[0].itemList.push(t);else if("navigator"===t.manifest.name)o.groups[0].itemList.push(t);else{const e=i.groups.find((e=>e.groupId===t.group));e?e.itemList.push(t):i.groups.push({groupId:t.group,itemList:[t]})}})),m(this.placeholderItem.label,this.props.searchValue)&&s.groups[0].itemList.push(this.placeholderItem),(0,e.jsx)("div",{className:"flex-column bg-light-300 d-flex"},(0,e.jsx)("div",{className:"jimu-builder-panel--content choose-widget-popup-content text-black"},this.isLoading()?(0,e.jsx)("div",{className:"jimu-secondary-loading"}):(0,e.jsx)("div",null,(0,e.jsx)(f,{info:i,appMode:this.props.appMode}),(0,e.jsx)(f,{info:s,appMode:this.props.appMode}),(0,e.jsx)(f,{info:o,appMode:this.props.appMode}))))}}function f({info:t,appMode:i}){const{label:s,groups:o}=t;return(0,e.jsx)("section",{className:"mb-4 mt-2 px-3",role:"group","aria-label":s},(0,e.jsx)("h4",{className:"new-elements-title text-break"},s),o.map(((t,s)=>(0,e.jsx)(v,{key:t.groupId,group:t,isLast:s===o.length-1,appMode:i}))))}function v({group:t,isLast:i,appMode:s}){return(0,e.jsx)("div",{className:(0,e.classNames)("container-fluid p-0",{"mb-10":!i}),role:"group"},(0,e.jsx)("div",{className:"row no-gutters"},t.itemList.map(((t,i)=>t?(0,e.jsx)(u,{item:t,hideLabel:!1,appMode:s,key:i}):(0,e.jsx)("div",{className:"col-6",style:{visibility:"hidden"},key:i})))))}const b=(0,i.withTheme)(g);var x=r(4758);class w extends e.React.PureComponent{constructor(){super(...arguments),this.getListItemJSX=t=>{if(!t)return(0,e.jsx)("div",{className:"col-6",style:{visibility:"hidden"}});const i=this.Item;return(0,e.jsx)("div",{key:t.name||t.id},(0,e.jsx)(s,{item:t,fullLine:!0,appMode:this.props.appMode,className:"dragable-element p-0 mb-12"},(()=>(0,e.jsx)(i,{item:t}))))},this.Item=({item:i})=>{var s,o;const a="string"==typeof i.icon?i.icon:i.icon&&i.icon.svg,n="string"==typeof i.icon?null:i.icon&&i.icon.properties&&i.icon.properties.color;return(0,e.jsx)("div",{title:i.label,className:"d-flex align-items-center pendding-elements-item px-2","aria-label":i.label,tabIndex:0,role:"button"},(0,e.jsx)("div",{className:"pendding-elements-item-icon-container d-flex justify-content-center align-items-center"},(0,e.jsx)(t.Icon,{className:"pendding-elements-item-icon",icon:a,color:n,autoFlip:null===(o=null===(s=i.manifest)||void 0===s?void 0:s.properties)||void 0===o?void 0:o.flipIcon})),(0,e.jsx)("div",{className:"text-truncate pendding-elements-item-label"},i.label))}}render(){return(0,e.jsx)("div",{className:"w-100"},this.getListItemJSX(this.props.item))}}const I=(0,i.withTheme)(w);class y extends e.React.PureComponent{constructor(){super(...arguments),this.convertLayoutItemToElementItem=(t,i)=>{var s,o,a;const n=this.props.layouts[t.layoutId].content[t.layoutItemId],r=null===(s=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===s?void 0:s.appConfig,l=x.searchUtils.getWidgetIdThatUseTheLayoutId(r,t.layoutId);if(n.type===e.LayoutItemType.Widget){const s=n.widgetId,o=this.props.widgets[s];let a;a=l&&this.props.widgets[l].manifest.widgetType!==e.WidgetType.Layout?Object.keys(this.props.widgets[l].layouts).length>1&&this.props.layouts[t.layoutId].label?this.props.widgets[l].label+"-"+this.props.layouts[t.layoutId].label+"-"+o.label:this.props.widgets[l].label+"-"+o.label:o.label;const r=o&&o.icon?"string"==typeof o.icon?o.icon:o.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:n.widgetId,itemType:e.LayoutItemType.Widget,layoutInfo:t,isFromCurrentSizeMode:i,label:a,uri:o&&o.uri,icon:r,isPending:!0,manifest:o&&o.manifest&&o.manifest.asMutable({deep:!0})}}if(n.type===e.LayoutItemType.Section){const s=n.sectionId,a=null===(o=this.props.sections)||void 0===o?void 0:o[s],r=a&&a.icon?"string"==typeof a.icon?a.icon:a.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:s,itemType:e.LayoutItemType.Section,layoutInfo:t,isFromCurrentSizeMode:i,label:a&&a.label,uri:"",icon:r,isPending:!0,manifest:{properties:{}}}}if(n.type===e.LayoutItemType.ScreenGroup){const s=n.screenGroupId,o=null===(a=this.props.screenGroups)||void 0===a?void 0:a[s],r=o&&o.icon?"string"==typeof o.icon?o.icon:o.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/screen-group.svg";return{id:s,itemType:e.LayoutItemType.ScreenGroup,layoutInfo:t,isFromCurrentSizeMode:i,label:o&&o.label,uri:"",icon:r,isPending:!0,manifest:{properties:{}}}}return null}}render(){var t,i,s,o,a,n,r,l,p,d,c,u,h,g;if(!this.props.currentPageId||!(null===(t=this.props.pages)||void 0===t?void 0:t[this.props.currentPageId])||(null===(s=null===(i=this.props.pages)||void 0===i?void 0:i[this.props.currentPageId])||void 0===s?void 0:s.type)!==e.PageType.Normal)return null;if(this.props.activeOptsSectionViewId&&"insert"!==this.props.activeOptsSectionViewId)return null;const f=null===(o=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.appConfig;if(!f)return null;let v;v=this.props.activePagePart===e.PagePart.Header?null===(n=null===(a=f.header)||void 0===a?void 0:a.layout)||void 0===n?void 0:n[this.props.browserSizeMode]:this.props.activePagePart===e.PagePart.Footer?null===(l=null===(r=f.footer)||void 0===r?void 0:r.layout)||void 0===l?void 0:l[this.props.browserSizeMode]:this.props.activePagePart===e.PagePart.Body?null===(c=null===(d=null===(p=f.pages)||void 0===p?void 0:p[this.props.currentPageId])||void 0===d?void 0:d.layout)||void 0===c?void 0:c[this.props.browserSizeMode]:null===(g=null===(h=null===(u=f.dialogs)||void 0===u?void 0:u[this.props.currentDialogId])||void 0===h?void 0:h.layout)||void 0===g?void 0:g[this.props.browserSizeMode];const b=v?x.searchUtils.getPendingLayoutItemsFromOtherSizeModeInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],w=v?x.searchUtils.getPendingLayoutItemsFromOtherSizeModeInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],y=b.map((e=>this.convertLayoutItemToElementItem(e,!1))).concat(w.map((e=>this.convertLayoutItemToElementItem(e,!1)))),j=v?x.searchUtils.getPendingLayoutItemsInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],M=v?x.searchUtils.getPendingLayoutItemsInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],S=j.map((e=>this.convertLayoutItemToElementItem(e,!0))).concat(M.map((e=>this.convertLayoutItemToElementItem(e,!0)))),P=y.concat(S).filter((e=>m(e.label,this.props.searchValue)));return(0,e.jsx)("div",{className:"flex-column bg-light-300 d-flex px-3 pb-3"},0===P.length&&(0,e.jsx)("div",{className:"pt-1 text-white-50 text-left text-break"},this.props.intl.formatMessage({id:"pendingElementsInfo",defaultMessage:"This area lists widgets that have been configured but not on the current canvas. They may exist in other device modes."})),P.map((t=>(0,e.jsx)(I,{key:t.id,item:t,appMode:this.props.appMode}))))}}const j=e.ReactRedux.connect((function(e){var t,i,s,o,a,n,r,l,p,d,c,u,m,g,f,v,b,x;return h(e)?{currentPageId:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId,currentDialogId:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo.currentDialogId,appMode:null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo.appMode,browserSizeMode:null===(o=e.appStateInBuilder)||void 0===o?void 0:o.browserSizeMode,activePagePart:null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appRuntimeInfo.activePagePart,layouts:null===(r=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===r?void 0:r.layouts,widgets:null===(p=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===p?void 0:p.widgets,pages:null===(c=null===(d=e.appStateInBuilder)||void 0===d?void 0:d.appConfig)||void 0===c?void 0:c.pages,sections:null===(m=null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appConfig)||void 0===m?void 0:m.sections,screenGroups:null===(f=null===(g=e.appStateInBuilder)||void 0===g?void 0:g.appConfig)||void 0===f?void 0:f.screenGroups,activeOptsSectionViewId:null===(x=null===(b=null===(v=e.appRuntimeInfo)||void 0===v?void 0:v.sectionNavInfos)||void 0===b?void 0:b["opts-section"])||void 0===x?void 0:x.currentViewId}:{}}))((0,i.withTheme)(y));var M=r(224),S=r.n(M);const P=i=>{const{className:s}=i,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i}(i,["className"]),a=(0,e.classNames)("jimu-icon-component",s);return e.React.createElement(t.Icon,Object.assign({className:a,icon:S()},o))};class L extends e.React.PureComponent{constructor(t){super(t),this.onSearchIconClick=e=>{this.setState({isSearchInputShown:!this.state.isSearchInputShown})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value})},this.MemoNewElements=e.React.memo((t=>(0,e.jsx)(b,{widgetList:t.widgetList,appMode:t.appMode,intl:t.intl,searchValue:t.searchValue}))),this.MemoPendingElements=e.React.memo((t=>(0,e.jsx)(j,{intl:t.intl,searchValue:t.searchValue}))),this.state={widgetList:null,isSearchInputShown:!1,searchValue:""}}componentDidMount(){this.getWidgetListInfo()}componentDidUpdate(e,t){t.isSearchInputShown!==this.state.isSearchInputShown&&this.state.isSearchInputShown&&this.searchInput&&(this.searchInput.focus(),this.searchInput.select())}getWidgetListInfo(){fetch(`${e.moduleLoader.resolveModuleFullPath("widgets/")}/widgets-info.json`).then((e=>{return t=this,i=void 0,o=function*(){return yield e.json()},new((s=void 0)||(s=Promise))((function(e,a){function n(e){try{l(o.next(e))}catch(e){a(e)}}function r(e){try{l(o.throw(e))}catch(e){a(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,r)}l((o=o.apply(t,i||[])).next())}));var t,i,s,o})).then((t=>{const i=t.map((t=>{var i,s;t.manifest=e.appConfigUtils.addWidgetManifestProperties(t.manifest);const o=e.i18n.findLocale((0,e.getAppStore)().getState().appContext.locale,t.manifest.translatedLocales);return{itemType:e.LayoutItemType.Widget,name:t.name,label:(null===(i=t.i18nLabel)||void 0===i?void 0:i[o])||t.manifest.label||t.name,desription:(null===(s=t.i18nDescription)||void 0===s?void 0:s[o])||t.manifest.desription||t.name,uri:t.uri,manifest:t.manifest,icon:"../"+t.icon,group:t.group}}));this.setState({widgetList:i})}))}render(){const i=this.MemoNewElements,s=this.MemoPendingElements,o=this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search});return(0,e.jsx)("div",{css:(a=this.props.theme,e.css`
  .widget-builder-header-insert-elements {
    .text-dark-600{
      color: ${a.colors.palette.dark[600]};
    }
    .mb-10{
      margin-bottom: ${e.polished.rem(10)};
    }
    .mb-18{
      margin-bottom: ${e.polished.rem(18)};
    }
    .mb-12{
      margin-bottom: ${e.polished.rem(12)};
    }
    .title{
      padding: 18px 16px 8px 16px !important;
      font-size: 1rem !important;
      font-weight: 500;
      .search-icon{
        cursor: pointer;
        width: 30px;
      }
    }
    .search-input{
      height: 26px;
      border-radius: 2px;
    }
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: left;
    /* border-right: 1px solid ${a.colors.palette.light[800]}; */
    .collapse-btn{
      cursor: pointer;
      .jimu-icon{
        vertical-align: top;
      }
    }
    .jimu-nav{
      flex-shrink: 0;
      flex-grow: 0;
    }
    .new-elements-title{
      font-size: 14px;
      font-weight: 400;
      color: ${a.colors.palette.dark[400]};
      margin-bottom: ${e.polished.rem(8)};
    }
    .jimu-nav{
      height: ${e.polished.rem(43)} !important;
    }
    .jimu-tab{
      height: calc(100% - 50px);
    }
    .with-search-input.jimu-tab{
      height: calc(100% - 90px);
    }
    .tab-content{
      overflow: auto;
      padding-top: ${e.polished.rem(18)};
    }

    .dragable-element:hover{
      .pendding-elements-item{
        background-color: ${a.colors.palette.light[600]};
      }
    }

    .pendding-elements-item{
      height: ${e.polished.rem(32)};
      background: ${a.colors.secondary};

      .pendding-elements-item-icon-container{
        margin-right: ${e.polished.rem(8)};
        .pendding-elements-item-icon{
          width: ${e.polished.rem(16)};
          height: ${e.polished.rem(16)};
          color: ${a.colors.palette.dark[800]};
        }
      }
      .pendding-elements-item-label{
        max-width: ${e.polished.rem(180)};
        color: ${a.colors.palette.dark[800]};
        line-height: ${e.polished.rem(32)};
        font-size: ${e.polished.rem(13)};
      }
    }

    .btn{
      .jimu-icon{
        margin: 0;
      }
    }
    .jimu-builder-panel--header {
      padding: ${a.sizes[2]} ${a.sizes[3]};
      display: flex;
      flex-direction: row;
      align-items: center;
      h3 {
        margin: 0;
        line-height: 1.5;
        flex-grow: 1;
      }
    }
    .jimu-builder-panel--content {
      height: 100%;
      overflow: auto;
      .widget-card-item{
        height: 80px;
        font-size: 13px;

        user-select: none;
        cursor: pointer;
        .widget-card-item-content{
          position: relative;
          padding-top: 16px;
          background-color: ${a.colors.palette.light[500]};
        }
        &:hover .widget-card-item-content{
          background-color: ${a.colors.palette.light[600]};
        }
        .widget-card-image{
          width: 20px;
          height: 20px;
          &:after{
            display: none;
          }
        }

        .widget-card-name{
          max-width: 90px;
          margin: 0 auto;
          .widget-card-name-content{
            line-height: 1rem;
            max-height:2rem;
            white-space: normal;
          }
        }

        .widget-help-btn {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }

      .row {
        .col-6:nth-of-type(2n) {
          padding-left: ${a.sizes[1]};
        }
        .col-6:nth-of-type(2n+1) {
          padding-right: ${a.sizes[1]};
        }

        .col {
          flex-basis: 100%;
        }
      }
    }
    &.widget-popup-hide-animation{
      transition: transform 0.3s ease-out;
      &.from-left {
        transform: translateX(-100%);
      }
      &.from-right {
        transform: translateX(100%);
      }
    }
    &.widget-popup-show-animation{
      transition: transform 0.3s ease-in;
      &.from-left {
        transform: translateX(0%);
      }
      &.from-right {
        transform: translateX(0%);
      }
    }
    &.from-left {
      left: 0;
    }
    &.from-right {
      right: 0;
    }
  }`)},(0,e.jsx)("div",{className:"jimu-builder-panel widget-builder-header-insert-elements from-left flex-column bg-light-300"},(0,e.jsx)("div",{className:"jimu-builder-panel--header d-flex flex-row justify-content-between text-dark-600 title"},(0,e.jsx)("div",{className:"flex-grow-1 m-0 text-truncate text-left"},this.props.intl.formatMessage({id:"element",defaultMessage:"Insert widget"})),(0,e.jsx)("div",{className:"search-icon d-flex align-items-start justify-content-end",onClick:this.onSearchIconClick},(0,e.jsx)(t.Button,{size:"sm",icon:!0,type:"tertiary",title:o,"aria-label":o,"aria-pressed":this.state.isSearchInputShown},(0,e.jsx)(P,{size:"m"})))),(0,e.jsx)("div",{className:"w-100 px-3"},this.state.isSearchInputShown&&(0,e.jsx)(t.TextInput,{value:this.state.searchValue,onChange:this.onSearchValueChange,className:"search-input my-2",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:e.defaultMessages.search}),ref:e=>{this.searchInput=e},allowClear:!0})),(0,e.jsx)(t.Tabs,{type:"underline",fill:!0,className:(0,e.classNames)({"with-search-input":this.state.isSearchInputShown}),defaultValue:"new"},(0,e.jsx)(t.Tab,{id:"new",className:"w-50",title:this.props.intl.formatMessage({id:"new",defaultMessage:"New"})},(0,e.jsx)(i,{widgetList:this.state.widgetList,appMode:this.props.appMode,intl:this.props.intl,searchValue:this.state.searchValue})),(0,e.jsx)(t.Tab,{id:"pending",className:"w-50",title:this.props.intl.formatMessage({id:"pending",defaultMessage:"Pending"})},(0,e.jsx)(s,{intl:this.props.intl,searchValue:this.state.searchValue})))));var a}}L.mapExtraStateProps=e=>{var t,i,s;return h(e)?{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,appPath:e.appPath,browserSizeMode:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode,activePagePart:null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo.activePagePart}:{}}})(),l})())}}}));
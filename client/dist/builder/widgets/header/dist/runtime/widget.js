System.register(["jimu-core","jimu-core/react","jimu-for-builder","jimu-for-builder/service","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"],(function(e,t){var s={},i={},o={},a={},n={},r={},l={},p={};return{setters:[function(e){s.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,s.AppMode=e.AppMode,s.BrowserSizeMode=e.BrowserSizeMode,s.CONSTANTS=e.CONSTANTS,s.Immutable=e.Immutable,s.Keyboard=e.Keyboard,s.LoadingType=e.LoadingType,s.PageMode=e.PageMode,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.SessionManager=e.SessionManager,s.appActions=e.appActions,s.classNames=e.classNames,s.css=e.css,s.defaultMessages=e.defaultMessages,s.getAppStore=e.getAppStore,s.jimuHistory=e.jimuHistory,s.jsx=e.jsx,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.portalUtils=e.portalUtils,s.queryString=e.queryString,s.urlUtils=e.urlUtils,s.utils=e.utils},function(e){i.useEffect=e.useEffect,i.useRef=e.useRef,i.useState=e.useState},function(e){o.appStateHistoryActions=e.appStateHistoryActions,o.builderActions=e.builderActions,o.builderAppSync=e.builderAppSync,o.getAppConfigAction=e.getAppConfigAction,o.helpUtils=e.helpUtils},function(e){a.appServices=e.appServices},function(e){n.useTheme=e.useTheme,n.withTheme=e.withTheme},function(e){r.AdvancedButtonGroup=e.AdvancedButtonGroup,r.AlertPopup=e.AlertPopup,r.Button=e.Button,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Icon=e.Icon,r.Modal=e.Modal,r.ModalBody=e.ModalBody,r.ModalFooter=e.ModalFooter,r.ModalHeader=e.ModalHeader,r.Option=e.Option,r.Popper=e.Popper,r.Select=e.Select,r.Switch=e.Switch,r.TagInput=e.TagInput,r.TextArea=e.TextArea,r.TextInput=e.TextInput,r.Toast=e.Toast,r.ToastType=e.ToastType,r.Tooltip=e.Tooltip,r.UserProfile=e.UserProfile,r.defaultMessages=e.defaultMessages,r.hooks=e.hooks},function(e){l.dataComponentsUtils=e.dataComponentsUtils},function(e){p.ProxySettingPopup=e.ProxySettingPopup,p.proxySettingUtils=e.proxySettingUtils}],execute:function(){e((()=>{var e={4065:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4h12v7H2V4zM0 4a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4 10a1 1 0 100 2h8a1 1 0 100-2H4z" fill="#000"></path></svg>'},888:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5H6v9h4V5zM6 3a2 2 0 00-2 2v9a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6z" fill="#000"></path></svg>'},1658:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0a2 2 0 100 4 2 2 0 000-4zM6 8a2 2 0 114 0 2 2 0 01-4 0zm0 6a2 2 0 114 0 2 2 0 01-4 0z" fill="#000"></path></svg>'},4928:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H4v11h8V3zM4 1a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 00-2-2H4z" fill="#000"></path></svg>'},4454:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.329 1a.875.875 0 00-.87.773l-.005.102v1.78c-4.878.411-7.355 3.17-7.432 8.277L1 12.374v.64l.006.35c.004.124.009.256.016.396l.034.503c.089.525.433.757.82.736.305-.018.532-.302.607-.6l.103-.398.109-.388c.122-.42.23-.72.324-.901 1.298-2.504 3.343-3.685 5.435-3.824v1.38a.875.875 0 001.364.725l.087-.067 4.796-4.196a.875.875 0 00.078-1.24l-.078-.077-4.796-4.197A.875.875 0 009.33 1z" fill="#000"></path></svg>'},3416:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.671 1c.449 0 .819.338.87.773l.005.102v1.78c4.878.411 7.355 3.17 7.432 8.277l.022.442v.64c-.002.217-.008.467-.022.746l-.034.503c-.089.525-.433.757-.82.736-.305-.018-.532-.302-.607-.6l-.103-.398-.108-.388c-.123-.42-.231-.72-.325-.901-1.298-2.504-3.343-3.685-5.435-3.824v1.38a.875.875 0 01-1.364.725l-.087-.067L1.299 6.73a.875.875 0 01-.078-1.24l.078-.077 4.796-4.197A.875.875 0 016.67 1z" fill="#000"></path></svg>'},119:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4l-6 8-6-8h12z" fill="#000"></path></svg>'},4138:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 111 8a7 7 0 0114 0zM6.25 5.621a.6.6 0 01.933-.5l3.568 2.38a.6.6 0 010 .998l-3.568 2.38a.6.6 0 01-.933-.5V5.62z" fill="#000"></path></svg>'},6245:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3a2 2 0 012-2h8.086a1 1 0 01.707.293l2.914 2.914a1 1 0 01.293.707v1.982l-.612-.613c-.367-.366-.95-.379-1.302-.027L10.18 9.162a2.625 2.625 0 10-3.643 3.643l-.092.092L6.067 15H3a2 2 0 01-2-2V3zm1.75.75a1 1 0 011-1h5.875a1 1 0 011 1v1.5a1 1 0 01-1 1H3.75a1 1 0 01-1-1v-1.5zm10.92 4.455c.28-.282.747-.272 1.04.022l1.063 1.063c.294.293.304.76.022 1.04l-5.313 5.314-1.944.35a.463.463 0 01-.531-.532l.35-1.944 5.312-5.313z" fill="#000"></path></svg>'},5648:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3a2 2 0 012-2h8.086a1 1 0 01.707.293l2.914 2.914a1 1 0 01.293.707V13a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm1.75.75a1 1 0 011-1h5.875a1 1 0 011 1v1.5a1 1 0 01-1 1H3.75a1 1 0 01-1-1v-1.5zm7.875 6.875a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" fill="#000"></path></svg>'},4767:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zM2 1H1v4h14V1H2zm2 7H2v6h2V8zM2 7H1v8h4V7H2zm6 1h6v6H8V8zM7 7h8v8H7V7z" fill="#000"></path></svg>'},9964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125L14.334 14H1.667L8 2.125zm-.882-.47a1 1 0 011.765 0l6.333 11.874A1 1 0 0114.334 15H1.667a1 1 0 01-.882-1.47L7.118 1.653zM8 4.874a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0L8.9 5.87a.905.905 0 00-.9-.995zm1 7a1 1 0 11-2 0 1 1 0 012 0z" fill="#000"></path></svg>'},1262:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ZvLahNRGMf/J6mirWJcKFhQp4IKLdiK6KaCEURQF1bwumr6BK1P0OkTmDxB01XxAsaNghU7BV2ICHVRF4oaFRUMaERbxaY5nm9iFk3SJOcyl9T+YLqYziSc//muJ+cwBMHktIVIIYEIGwZHXtxxsBQdw5XjWfgMg5/cnIqLv6Ni0PHaD7A02OIELpxy4BPeCzA+HcPmpUFwPrDywKuYFdaRxPkTE/AY7wSggbcXRkpmzmNQgmVR5CnwtoxX7mFeADJzzofFRw/AKMI9PIgT5gS49WDAHXjzZq4GEwGTCTEMuYeeAEbMXBXhHhHYWIzO6FiFmgBk5kWcFQNP+D/wChjLC6vLqLqHnAAN01jQ8AzYUkomjTYWoGzmjA2KL7DQEvxzjybiRH0Brk/Zwfi3KYQQDarM2gLQrG8q3A6vqatQu8qM1Hy2Y8leXYMnuAjY0fHKu9UCuIGOChmz9MU2Y3B3J8JGtQCcgp15SID0kW68PX0UZzu3IyxUC8B4HzzE6tiATP8BjB/ugdW+EUFTwwLgqQBlEtYOvD3Tj2t9+wMVog2ajOzbhdHuPYita0N2/he67j6We3/vTveSJTv/G/bca0y8+wwdItAgvm0rrvXucwfvN+RK6SM92t+tJYDVEbwP94rgqoOWAKsB32zXyX1F3HkGHQ7GNrlB0yS+CUBBiy4dZnLfjAvw37vAmgBocQJNg2Eg09+rVU2uChegSnI6fkip2/QtCySsTtEAdTf1LKVLivgylCrDblEaf5J6T8sCtgRQAtcjnZUbPKElADVCYSG/WMDY3BvIoiwAmbTVvgFhIfnyPbIL8oWWkgDUBI327EFYoDZ87IX87BNKAlD/H6bZt+fUBk9IC0CzT6s5YSHzMae1KCItQLOpzC+Sr95DB6k8RrNPq0AqyLTDz/M/4BdSAlCwIX+zFQKgiXbYC6RdgKJt191HSkVHGFHKAjSTQ09f4OrsS7Q6WpUgVV+tztqCCAwSW78uFD93yWC0naPVGfq5S5eDU08w61MqDKUL+Nlmr8UAaPDtzyJaHS0B7nzKuVdQ0BqA7NJZJdrONvD4OY4p9AddYg2P1hRks0a5n/guahD5QOnuGluGkWijMgszOVrD++yu6A6LpbVmhdCacY7ZyluBB8Hkqw84LmbVl96iWEhV3gpFFij3FtRkOV/0fHpFOGxcOZWtvF29UfLGw2NAYcT8fv8AKbI0Lp8YqvWvlbfKTt6zEI2WNkYzZqE1yaPIbVw+mVrpgcabpUkIROPCWUZbSAhHDC2D+R8TGDqXr/eg3Hb5yfsJRN2NlHGEE0c4u42LJ2eafUHtwETZPcASCJ48eDGNYjFVK8g1Qu/ITLDuQSdFklj4mWpk5vUwd2jKP/dwZM28HuaPzZXSaMKwe5TMnInAZmjgZbw7OGkmjRox83r4c3aY3EMuTjjgoni51MpHZ2vR2D0ck/7dDP4KUGa5e8S8NvN6/AXWppIKbqQ9gQAAAABJRU5ErkJggg=="},8891:e=>{"use strict";e.exports=s},1315:e=>{"use strict";e.exports=i},3137:e=>{"use strict";e.exports=o},6325:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=n},726:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=l},7756:e=>{"use strict";e.exports=p}},t={};function d(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,d),o.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var s in t)d.o(t,s)&&!d.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{default:()=>Se});var e,t,s,i,o=d(8891),a=d(726),n=d(3137),r=d(6325);!function(e){e.Experience="Web Experience",e.Template="Web Experience Template"}(e||(e={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed",e.Publishing="Publishing"}(t||(t={})),function(e){e.Save="Save",e.Saved="Saved",e.Saving="Saving",e.SaveError="Save Error",e.SaveSuccess="Save Success"}(s||(s={})),function(e){e.SaveAs="Save_As",e.Save="Save",e.SaveInDropdown="Save_In_Dropdown"}(i||(i={}));const l={createNew:"Create new",newExperience:"New experience",undo:"Undo",redo:"Redo",save:"Save",saving:"Saving",saved:"Saved",download:"Download",saveError:"Saving error",saveSuccess:"Saved successfully!",publishing:"Publishing",published:"Published",publishError:"Publishing error",publishSuccess:"Published successfully!",publishTo:"Publish to",publishOptions:"Publish options",copySuccess:"Copied successfully!",changeShareSettings:"Change share settings",viewPublishedItem:"View published item",copyPublishedItemLink:"Copy published item link",headerLeave:"Leave",headerLeaveSite:"Leave site?",headerLeaveDescription:"Changes you made may not be saved.",editPageForLargeScreen:"Edit your page for large screen devices",editPageForMediumScreen:"Edit your page for medium screen devices",editPageForSmallScreen:"Edit your page for small screen devices",appMode:"Live view",generateTemplate:"Generate template",moreOptionsForTool:"More",moreTools:"More tools",access:"Access",generateTemplateSuccess:"Generated template successfully!",generateTemplateError:"Generating error",headerLockLayout:"Lock layout",enableLayoutEditing:"Turn on layout lock to disable layout editing",disableLayoutEditing:"Turn off layout lock to enable layout editing",layoutIsEnabled:"Layout editing is enabled.",layoutIsDisabled:"Layout editing is disabled.",appTypeTemplate:"Experience Template",appTypeExperience:"Experience",publishedTitle:"This item can be viewed by users you've shared with.",publishedUnsaveTitle:"There are unpublished changes since last publishing.",itemStatusDraft:"Draft",draftStatusTitle:"This item is not published. It can only be viewed by you.",headerHome:"Home",renameExperience:"Rename experience",renameTemplate:"Rename template",turnOnLiveView:"Turn on live view",turnOffLiveView:"Turn off live view",changeScreenSize:"Change screen size",createNewExperience:"Create new experience",gotIt:"Got it",templateRemind:"You are now working on an experience template.",unpublishedChanges:"Unpublished changes"};var p=d(7756),h=d(338),u=d(4796),m=d(1658),g=d.n(m);const v=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:g()},s))};var b=d(4138),f=d.n(b);const w=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:f()},s))};var S=d(3416),y=d.n(S);const x=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:y()},s))};var T=d(4454),j=d.n(T);const O=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:j()},s))};var A=d(5648),P=d.n(A);const M=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:P()},s))};var k=d(6245),I=d.n(k);const C=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:I()},s))};class N extends o.React.PureComponent{getStyle(e){return o.css`
      .item-inner {
        width: 16px;
        height: 16px;
        position: relative;
      }

      .item-loader-container {
        width: 100%;
        height: 100%;
      }

      .la-ball-fall,
        .la-ball-fall>div {
          position:relative;
          -webkit-box-sizing:border-box;
          -moz-box-sizing:border-box;
          box-sizing:border-box
        }

      .la-ball-fall {
        display:block;
        font-size:0;
        color:${e.colors.black}
      }

      .la-ball-fall>div {
        display:inline-block;
        float:none;
        background-color:currentColor;
        border:0 solid currentColor
      }

      .la-ball-fall {
        width:54px;
        height:18px
      }

      .la-ball-fall>div{
        width:10px;
        height:10px;
        margin:4px;
        border-radius:100%;
        opacity:0;
        -webkit-animation:ball-fall 1s ease-in-out infinite;
        -moz-animation:ball-fall 1s ease-in-out infinite;
        -o-animation:ball-fall 1s ease-in-out infinite;
        animation:ball-fall 1s ease-in-out infinite
      }

      .la-ball-fall>div:nth-of-type(1){
        -webkit-animation-delay:-200ms;
        -moz-animation-delay:-200ms;
        -o-animation-delay:-200ms;
        animation-delay:-200ms
      }

      .la-ball-fall>div:nth-of-type(2){
        -webkit-animation-delay:-100ms;
        -moz-animation-delay:-100ms;
        -o-animation-delay:-100ms;
        animation-delay:-100ms
      }

      .la-ball-fall>div:nth-of-type(3){
        -webkit-animation-delay:0ms;
        -moz-animation-delay:0ms;
        -o-animation-delay:0ms;
        animation-delay:0ms
      }

      .la-ball-fall.la-2x{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .la-ball-fall.la-2x>div{
        width:25%;
        height:25%;
        margin:3%;
      }

      @-webkit-keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}
      }

      @-moz-keyframes ball-fall{
        0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}
      }

      @-o-keyframes ball-fall{
        0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}
      }

      @keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);
        -moz-transform:translateY(-145%);
        -o-transform:translateY(-145%);
        transform:translateY(-145%)}10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;
        -webkit-transform:translateY(145%);
        -moz-transform:translateY(145%);
        -o-transform:translateY(145%);
        transform:translateY(145%)}
      }
    `}render(){return(0,o.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},(0,o.jsx)("div",{className:"item-inner"},(0,o.jsx)("div",{className:"item-loader-container"},(0,o.jsx)("div",{className:"la-ball-fall la-2x"},(0,o.jsx)("div",null),(0,o.jsx)("div",null),(0,o.jsx)("div",null)))))}}const $=N;var z=d(1315),E=d(9964),L=d.n(E);const B=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:L()},s))};var R;!function(e){e.AllFolder="AllFolder",e.OtherFolder="OtherFolder"}(R||(R={}));const D={IMAGE:[".png",".jpg",".gif"]},U=e=>{const s=a.hooks.useTranslate(a.defaultMessages),i=(0,u.useTheme)(),n=(0,z.useRef)(null),l=o.css`
    &.modal-dialog{
      width: ${o.polished.rem(640)};
      max-width: ${o.polished.rem(640)};
    }
    & .edit-info-con {
      .info-content-otherinfo {
        width: ${o.polished.rem(346)};
      }
      .info-content-pic {
        width: ${o.polished.rem(240)};
        height: ${o.polished.rem(160)};
        background-size: cover;
        background-position: top center;
        margin-right: ${o.polished.rem(20)};
      }
      .edit-thumbnail-btn {
        width: ${o.polished.rem(240)};
        margin-top: ${o.polished.rem(11)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        display: block;
      }
      .edit-thumbnail-btn-con:hover .edit-thumbnail-btn {
      }
      .info-title-input {
        margin-bottom: ${o.polished.rem(16)};
      }
      .edit-thumbnail-inp {
        bottom: 0;
        left: 0;
        width: ${o.polished.rem(240)};
        height: ${o.polished.rem(34)};
        opacity: 0;
        cursor: pointer;
      }
      .info-content-label {
        font-size: ${o.polished.rem(14)};
        line-height: ${o.polished.rem(18)};
        color: ${i.colors.palette.dark[300]};
        font-weight: 600;
        margin-bottom: ${o.polished.rem(10)} !important;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .info-content-textarea {
        height: ${o.polished.rem(80)};
        resize: none;
        padding: ${o.polished.rem(4)} ${o.polished.rem(6)};
        box-sizing: border-box;
        font-size: ${o.polished.rem(14)};
      }
    }
  `,{folderUrl:p,templateHeaderText:d,experienceHeaderText:c,appConfig:h,originalAppInfo:m,isOpen:g,toggle:v,changePublishStatus:b,onSaveSuccess:f,onSaveError:w,togglePublishOptionList:S}=e,[y,x]=(0,z.useState)(!1),[T,j]=(0,z.useState)(!1),[O,A]=(0,z.useState)(null),[P,M]=(0,z.useState)([]),[k,I]=(0,z.useState)((null==m?void 0:m.title)||""),[C,N]=(0,z.useState)([]),[$,E]=(0,z.useState)(m),[L,R]=(0,z.useState)((null==m?void 0:m.ownerFolder)||"/"),[U,H]=(0,z.useState)([]),[F,W]=(0,z.useState)((null==m?void 0:m.snippet)||""),[Y,V]=(0,z.useState)(null);(0,z.useEffect)((()=>{g&&(q(),Q(),K(),_())}),[g]);const _=()=>{var e,t;const s=(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)||"",i=(null==m?void 0:m.username)===s;R(i&&(null==m?void 0:m.ownerFolder)||"/")},K=()=>{var e;const t=(null==m?void 0:m.tags)?null===(e=null==m?void 0:m.tags)||void 0===e?void 0:e.asMutable({deep:!0}):[],s=null==t?void 0:t.filter((e=>e));I((null==m?void 0:m.title)||""),E(m),R((null==m?void 0:m.ownerFolder)||"/"),H(s),W((null==m?void 0:m.snippet)||"")},q=()=>{var e,t;if(window.jimuConfig.isDevEdition)return!1;const s=(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)||"";s&&r.appServices.getUserTags(s).then((e=>{var t;const s=null===(t=null==e?void 0:e.tags)||void 0===t?void 0:t.map((e=>e.tag));N(s||[])}))},Q=()=>!window.jimuConfig.isDevEdition&&r.appServices.getFolders({num:1}).then((e=>{G(e||[])}),(e=>Promise.reject(e))),G=e=>{const t=(0,o.getAppStore)().getState().user,s=(null==t?void 0:t.username)||"",i=[];s&&i.push({value:"/",text:s}),e.forEach((e=>{const t={value:e.id,text:e.title};i.push(t)})),M(i)},X=()=>{const e=n.current.files;if(!e||!e[0])return!1;const t=e[0].name;if(e[0].size>10485760)return A(s("fileSizeTips",{maxSize:"10M"})),j(!0),n.current.value=null,!1;const i=t.split(".")[t.split(".").length-1],o=`.${i}`;if(!D.IMAGE.includes(o.toLowerCase()))return A("editAppErrorMessage"),J(),!1;const a=new File([e[0]],`thumbnail${(new Date).getTime()}${o}`,{type:`image/${i}`}),r=window.URL.createObjectURL(a);return V(r),a},J=()=>{j(!T)},Z=(e,t=!1)=>{let s=e.target.value;s=s.length>250?s.slice(0,250):s;let i=$;window.jimuConfig.isDevEdition&&(i=i.set("text","")),t&&(s=/^[ ]*$/.test(s)?$.title:s,s=null==s?void 0:s.replace(/(^\s*)|(\s*$)/g,"")),i=i.set("name",s),i=i.set("title",s),E(i),I(s)},ee=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},te=()=>{x(!1),v(),w()},se=()=>{v(),w(!0),V(null)};return(0,o.jsx)(a.Modal,{isOpen:null==e?void 0:e.isOpen,centered:!0,returnFocusAfterClose:!0,css:l,backdrop:"static"},(0,o.jsx)(a.ModalHeader,{toggle:se},(null==e?void 0:e.isTemplate)?d:c),(0,o.jsx)(a.ModalBody,null,(0,o.jsx)("div",{className:"edit-info-con h-100","data-testid":"editInfo"},(0,o.jsx)("div",{className:"d-flex justify-content-center w-100 h-100"},(0,o.jsx)("div",null,(0,o.jsx)("div",{"data-testid":"thumbnailCon",className:"info-content-pic",style:{backgroundImage:`url(${Y||(()=>{const e=null==$?void 0:$.thumbnail,t=(0,o.getAppStore)().getState().portalUrl;let s=e;const i=o.SessionManager.getInstance().getSessionByUrl(t);return s=s?`${t}/sharing/rest/content/items/${$.id}/info/${e}?token=${null==i?void 0:i.token}`:`${p}./dist/runtime/assets/defaultthumb.png`,e&&window.jimuConfig.isDevEdition&&(s=`${window.location.origin}/apps/${$.id}/${e}`),s})()})`}}),(0,o.jsx)("div",{className:"position-relative edit-thumbnail-btn-con"},(0,o.jsx)(a.Button,{className:"edit-thumbnail-btn",title:s("editThumbnail")},s("editThumbnail")),(0,o.jsx)("input",{"data-testid":"thumbnailInput",title:s("editThumbnail"),ref:n,className:"position-absolute edit-thumbnail-inp",type:"file",accept:".png, .jpg, .gif",onChange:X}))),(0,o.jsx)("div",{className:"info-content-otherinfo flex-grow-1"},(0,o.jsx)("div",{className:"info-content-label",title:s("name")},s("name")),(0,o.jsx)(a.TextInput,{value:k,className:"info-title-input",onChange:e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),I(t)},onBlur:e=>{Z(e,!0)},onKeyUp:e=>{Z(e)}}),(0,o.jsx)("div",{className:"info-content-label",title:s("summaryField")},s("summaryField")),(0,o.jsx)(a.TextArea,{placeholder:s("summaryPlaceholder"),value:F,className:"info-content-textarea form-control mb-3",onAcceptValue:e=>{const t=$.set("snippet",e);E(t),W(e)}}),!window.jimuConfig.isDevEdition&&(0,o.jsx)("div",{className:"select-choices-con mb-3"},(0,o.jsx)("div",{className:"info-content-label",title:s("tags")},s("tags")),(0,o.jsx)(a.TagInput,{data:U,selectListData:C,onChange:e=>{const t=$.setIn(["tags"],e);H(e),E(t)},name:s("tagsLowerCase"),menuProps:{maxHeight:80}})),!window.jimuConfig.isDevEdition&&(0,o.jsx)("div",null,(0,o.jsx)("div",{className:"info-content-label",title:s("saveInFolder")},s("saveInFolder")),(0,o.jsx)(a.Select,{value:L||"/",onChange:e=>{const t=e.target.value;R(t)}},P.map((e=>(0,o.jsx)(a.Option,{value:e.value,key:e.value},e.text))))))),y&&(0,o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",zIndex:1e4},className:"jimu-primary-loading"}),(0,o.jsx)(a.AlertPopup,{isOpen:T,hideCancel:!0,toggle:()=>{j(!T)}},(0,o.jsx)("div",{className:"align-middle pt-2",style:{fontSize:"1rem"}},(0,o.jsx)(B,{className:"mr-2 align-middle",size:24,color:"var(--warning-600)"}),(0,o.jsx)("span",{className:"align-middle"},O))))),(0,o.jsx)(a.ModalFooter,null,(0,o.jsx)(a.Button,{type:"primary",onClick:()=>{x(!0);const e=X()||null,s=window.jimuConfig.isDevEdition?null:L;r.appServices.saveAsApp(null==m?void 0:m.asMutable({deep:!0}),null==$?void 0:$.asMutable({deep:!0}),s,e).then((e=>{const s=$.set("id",e);E(s),(e=>{const t=new Date,s=t.getTime()-ee(t);return r.appServices.saveApp(e,h.set("timestamp",s))})(null==s?void 0:s.asMutable({deep:!0})).then((s=>{o.jimuHistory.replaceQueryObject({id:e},!0),x(!1),v(),b(t.Draft),f(h),S&&S()}),(e=>{te()}))}),(e=>{te()}))}},s("commonModalOk")),(0,o.jsx)(a.Button,{onClick:se},s("commonModalCancel"))))},H=Object.assign({},l,a.defaultMessages),F=e=>{const t=a.hooks.useTranslate(H),n=(0,u.useTheme)(),{originalAppInfo:r,folderUrl:l,appConfig:p,isSave:d,toolListWidth:c,isInDropdown:h,saveState:m,clickSaveButtonType:g,isOpenSaveAsPopper:v,togglePublishOptionList:b,onSaveSuccess:f,setIsOpenSaveAsPopper:w,onSaveError:S,onSaveStateChange:y,changePublishStatus:x,onSaveClick:T,clickSaveButtonTypeChange:j,saveAsPrivileges:O}=e,A=o.React.useRef(d),P=e=>e===g&&(e===i.Save?!h&&m===s.Saving:m===s.Saving);return(0,o.jsx)("div",null,h?(0,o.jsx)("div",null,c<138&&(0,o.jsx)(a.DropdownItem,{onClick:d?void 0:()=>{j(i.SaveInDropdown),setTimeout((()=>{T()}))},title:t("save"),className:"dropdown-more-save save-menu",disabled:d,toggle:!1},P(i.SaveInDropdown)?(0,o.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,o.jsx)($,{theme:n})):(0,o.jsx)(M,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),t("save")),(0,o.jsx)(a.DropdownItem,{className:"save-menu",onClick:()=>{j(i.SaveAs),A.current=d,y(s.Saving),w(!0)},title:t("saveAs"),toggle:!1,disabled:!O},P(i.SaveAs)?(0,o.jsx)("div",{className:"d-inline-block toollist-dropdown-icon",style:{width:"16px",height:"16px"}},(0,o.jsx)($,{theme:n})):(0,o.jsx)(C,{className:"toollist-item-icon d-inline-block toollist-dropdown-icon"}),t("saveAs"))):(0,o.jsx)(a.Button,{id:"tooltip_save",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!d,"tool-hidden":c<138}),type:"tertiary",icon:!0,size:"sm",title:(()=>{switch(m){case s.Save:return t("save");case s.SaveError:return t("saveError");case s.SaveSuccess:return t("saveSuccess");case s.Saved:return t("saved");case s.Saving:return t("saving")}})(),disabled:d,onClick:()=>{j(i.Save),T()}},P(i.Save)?(0,o.jsx)("div",{style:{width:"16px",height:"16px"}},(0,o.jsx)($,{theme:n})):(0,o.jsx)(M,{className:"toollist-item-icon"})),(0,o.jsx)(U,{originalAppInfo:r,isOpen:v,folderUrl:l,appConfig:p,templateHeaderText:t("saveAsTemplateTitle"),experienceHeaderText:t("saveAsAppTitle"),toggle:()=>{w(!v)},changePublishStatus:x,onSaveSuccess:f,onSaveError:(e=!1)=>{y(A.current?s.Saved:s.Save),!e&&S()},togglePublishOptionList:b}))};var W,Y=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};!function(e){e.NewApp="NewApp",e.SaveAsTemplate="SaveAsTemplate",e.Publish="Publish"}(W||(W={}));const V=Object.assign({},l,a.defaultMessages,o.defaultMessages);class _ extends o.React.PureComponent{constructor(i){super(i),this.fontSizeBase=14,this.panelWidth=210/this.fontSizeBase+"rem",this.save="save",this.saved="saved",this.saving="saving",this.saveError="saveError",this.saveSuccess="saveSuccess",this.publish="publish",this.published="published",this.publishing="publishing",this.publishError="publishError",this.publishSuccess="publishSuccess",this.translationMap={},this.updateToollistWidth=()=>{var e,t;const{toolListWidth:s}=this.state,i=(null===(t=null===(e=this.toolContainer)||void 0===e?void 0:e.current)||void 0===t?void 0:t.clientWidth)||0;s!==i&&this.setState({toolListWidth:i})},this.checkIsSaved=()=>this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1,this.onUndo=()=>{this.props.stateHistory.past.length<=1||(0,o.getAppStore)().dispatch(n.appStateHistoryActions.InBuilderAppConfigUndo())},this.onRedo=()=>{this.props.stateHistory.future.length<=0||(0,o.getAppStore)().dispatch(n.appStateHistoryActions.InBuilderAppConfigRedo())},this._getTimeOffset=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},this.onSaveClick=e=>Y(this,void 0,void 0,(function*(){var e;return this.setState({saveState:s.Saving}),yield this.saveRequest(null===(e=this.props)||void 0===e?void 0:e.appItem).then((e=>Y(this,void 0,void 0,(function*(){return this.onSaveSuccess(),this.updateTypeKeywordsRequest(),yield Promise.resolve()}))),(e=>Y(this,void 0,void 0,(function*(){return console.error(e),this.onSaveError(),yield Promise.reject(e)}))))})),this.onSaveSuccess=e=>{this.toastNote(this.translationMap[this.saveSuccess]),this.setState({savedAppConfig:e||(0,o.Immutable)(this.props.appConfig),saveState:s.Saved})},this.onSaveError=()=>{this.setState({saveState:s.SaveError}),this.toastNote(this.translationMap[this.saveError])},this.saveRequest=e=>{const t=new Date,s=t.getTime()-this._getTimeOffset(t);return r.appServices.saveApp(e,this.props.appConfig.set("timestamp",s))},this.duplicateAppItem=e=>{const t=this.getFolderId();return r.appServices.duplicateApp(e,t).then((e=>Promise.resolve(e)),(e=>{console.log(e)}))},this.updateTypeKeywordsRequest=()=>{const e=this.props.appItem;e.title=this.props.titleText;const t=this.getTypeKeywords(),s={id:e.id,typeKeywords:t.typeKeywords,owner:e.owner};r.appServices.updateAppInfo(s).then((()=>{this.props.changePublishStatus(t.status)}),(e=>{console.error(e)}))},this.getTypeKeywords=()=>{let e=!1,s=t.Draft;const{publishStatus:i}=this.props;let o=this.props.appItem.typeKeywords||[];if(o=o.map((o=>(o.includes("status:")&&(e=!0),o.includes("status:")&&i!==t.Draft?(s=t.Changed,`status: ${t.Changed}`):o))),!e){const e=`status: ${t.Draft}`;s=t.Draft,o.push(e)}return{typeKeywords:o,status:s}},this.onPublishClick=()=>{this.props.publishStatus!==t.Publishing&&(this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1?this.tryToPublishApp():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=W.Publish))},this.tryToPublishApp=()=>Y(this,void 0,void 0,(function*(){(yield p.proxySettingUtils.needToConfigProxy())?this.setState({isProxySettingPopupOpen:!0}):this.publishApp()})),this.onAppProxiesFinish=()=>Y(this,void 0,void 0,(function*(){return yield this.onSaveClick().then((()=>this.publishApp()))})),this.onAppProxiesCancel=()=>{this.setState({isProxySettingPopupOpen:!1})},this.onToggleProxySettingPopup=()=>{this.setState({isProxySettingPopupOpen:!this.state.isProxySettingPopupOpen})},this.publishApp=()=>{this.props.changePublishStatus(t.Publishing);const{appItem:e}=this.props;r.appServices.publishApp(e).then((()=>{this.setState({isPublished:!0}),this.props.changePublishStatus(t.Published),this.toastNote(this.translationMap[this.publishSuccess])}),(e=>{console.error(e),this.toastNote(this.translationMap[this.publishError]),this.props.changePublishStatus(t.Changed)}))},this.onToggleToolTipUndo=()=>{this.setState({toolTipUndoOpen:!this.state.toolTipUndoOpen,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipRedo=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!this.state.toolTipRedoOpen,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipSave=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!this.state.toolTipSaveOpen,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPreview=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!this.state.toolTipPreviewOpen,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublish=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!this.state.toolTipPublishOpen,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublishOptions=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!this.state.toolTipPublishOptionsOpen})},this.togglePublishOptionList=()=>{this.setState({publishOptionsListOpen:!this.state.publishOptionsListOpen,toolTipPublishOptionsOpen:!1})},this.toggleMoreToolList=()=>{this.setState({moreToolListOpen:!this.state.moreToolListOpen})},this.copyPublishUrlToClipBoard=()=>{const e=location.origin+window.jimuConfig.mountPath+(window.jimuConfig.useStructuralUrl?`experience/${this.props.queryObject.id}/`:`experience/?id=${this.props.queryObject.id}`),t=document.createElement("input");t.value=e,t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.toastNote(this.copySuccess),this.setState({publishOptionsListOpen:!1})},this.isInOnLine=()=>o.portalUrlUtils.isAGOLDomain(this.props.portalUrl),this.toastNote=e=>{this.setState({isToastNote:!0,noteText:e},(()=>{setTimeout((()=>{this.setState({isToastNote:!1,noteText:""})}),2e3)}))},this.saveForkeyBoard=()=>(this.state.saveState===s.Saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1||this.state.saveState===s.Saving||this.onSaveClick(),!1),this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.newApp=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=W.NewApp,!1;this.toNewApp()},this.toNewApp=()=>{const{locale:t}=this.props,s=t?{redirect:"back",locale:t}:{redirect:"back"},i=t?{page:"template",redirect:"back",locale:t}:{page:"template",redirect:"back"};this.props.itemType===e.Experience?(o.jimuHistory.changePage("template"),window.jimuConfig.useStructuralUrl?o.jimuHistory.replaceQueryObject(s,!0):o.jimuHistory.replaceQueryObject(i,!0)):this.createNewAppByTemplate(this.props.appItem)},this.createNewAppByTemplate=e=>{r.appServices.createAppByItemTemplate(e).then((e=>{e&&(o.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{}))},this.isConfirmsaveAsTemplate=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=W.SaveAsTemplate,!1;this.saveAsTemplate()},this.saveAsTemplate=()=>{var e;this.toggleLoading(!0),r.appServices.createTemplateByApp(null===(e=this.props)||void 0===e?void 0:e.appItem).then((e=>{this.toggleLoading(!1),e&&(this.toastNote(this.generateTemplateSuccess),o.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{this.toastNote(this.generateTemplateError),this.toggleLoading(!1)}))},this.toggleLoading=e=>{(0,o.getAppStore)().dispatch(o.appActions.setIsBusy(e,o.LoadingType.Primary))},this.deleteApp=(e,s)=>{r.appServices.deleteApp(e).then((()=>{s&&(o.jimuHistory.replaceQueryObject({id:s},!0),this.props.changePublishStatus(t.Draft))}))},this.handleToggleForLeaveAlertPopup=e=>{if(this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e)switch(this.clickEventType){case W.NewApp:this.toNewApp();break;case W.SaveAsTemplate:this.saveAsTemplate();break;case W.Publish:this.tryToPublishApp()}},this.previewToggle=()=>{this.setState({isShowPreviewAlertPop:!this.state.isShowPreviewAlertPop})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:V[e]}):e,this.getAlertPopTitle=()=>{switch(this.clickEventType){case W.NewApp:case W.SaveAsTemplate:return this.nls("headerLeaveSite");case W.Publish:return`${this.nls("publish")}`}},this.getAlertPopOkLabel=()=>{switch(this.clickEventType){case W.NewApp:case W.SaveAsTemplate:return this.nls("headerLeave");default:return""}},this.previewAlertPopStyle=()=>{var e,t,s,i,a,n;const r=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors;return o.css`
      .preview-alert-pop-content {
        font-size: 1rem;
        position: relative;
      }
      .modal-footer {
        padding: 0;
      }
      .modal-content {
        border: 1px solid ${null===(s=null==r?void 0:r.palette)||void 0===s?void 0:s.secondary[500]};
      }
      .perview-pop-button-con {
        right:0;
        bottom: -20px;
        text-align: right;
        margin-top: ${o.polished.rem(32)};
      }
      .preview-alert-pop-btn {
        min-width: ${o.polished.rem(80)};
        border: none;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 2px;
        background: transparent;
      }
      .btn-primary {
        color: ${null==r?void 0:r.black};
        background: ${null===(i=null==r?void 0:r.palette)||void 0===i?void 0:i.primary[500]};
      }
      .btn-cancle {
        color: ${null===(a=null==r?void 0:r.palette)||void 0===a?void 0:a.dark[600]};
        border-color: ${null===(n=null==r?void 0:r.palette)||void 0===n?void 0:n.secondary[800]};
        margin-left: ${o.polished.rem(10)};
        border-width: 1px;
        border-style: solid;
      }
    `},this.getTostStyle=()=>{var e,t,s,i,a,n,r,l,p,d,c;return o.css`
      & {
        height:  ${o.polished.rem(40)};
        top: ${o.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(i=null===(s=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===s?void 0:s.palette)||void 0===i?void 0:i.secondary[300]};
        line-height: ${o.polished.rem(40)};
        color: ${null===(l=null===(r=null===(n=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===n?void 0:n.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.dark[800]};
        font-weight: 300;
        padding: 0 ${o.polished.rem(16)};
        box-shadow: 0 0 ${o.polished.rem(10)} ${o.polished.rem(2)} ${o.polished.rgba(null===(c=null===(d=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===d?void 0:d.colors)||void 0===c?void 0:c.white,.2)};
      }
    `},this.getPublishText=()=>{const{publishStatus:e}=this.props;switch(e){case t.Published:return this.nls("published");case t.Publishing:return this.nls("publishing");case t.Changed:case t.Draft:return this.nls("publish")}},this.getFolderId=()=>{var e,t;const{appItem:s}=this.props;return(null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.user)||void 0===t?void 0:t.username)===(null==s?void 0:s.owner)?null:(null==s?void 0:s.ownerFolder)||null},this.onSaveStateChange=e=>{this.setState({saveState:e})},this.clickSaveButtonTypeChange=e=>{this.setState({clickSaveButtonType:e})},this.setIsOpenSaveAsPopper=e=>{this.setState({isOpenSaveAsPopper:e})},this.renderMore=()=>{var i,n;const r=window.jimuConfig.isDevEdition,{itemType:p,publishStatus:d,stateHistory:c,theme:h,queryObject:u,appItem:m,appConfig:g}=this.props,{saveState:b,toolListWidth:f,clickSaveButtonType:S,isOpenSaveAsPopper:y}=this.state,T=p===e.Template,j=o.SessionManager.getInstance().getMainSession(),A=null==j?void 0:j.token,P=b===s.Saved||(null===(i=null==c?void 0:c.past)||void 0===i?void 0:i.length)<=1&&(null===(n=null==c?void 0:c.future)||void 0===n?void 0:n.length)<1,M=o.urlUtils.getAppUrl({appId:u.id,isTemplate:T,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return(0,o.jsx)("div",{className:"tool_more_con"},(0,o.jsx)(a.Dropdown,{size:"sm",toggle:this.togglePublishOptionList,isOpen:this.state.publishOptionsListOpen||y},(0,o.jsx)(a.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"toollist-item-click border-0",title:this.moreOptionsForTool},(0,o.jsx)(v,{className:"toollist-dropdown-icon"})),(0,o.jsx)(a.DropdownMenu,{css:this.getDropdownStyle(h)},(0,o.jsx)(a.DropdownItem,{onClick:this.onUndo,className:"dropdown-more-undo",disabled:c.past.length<=1||f>=46,toggle:!1},(0,o.jsx)("div",{title:this.undo},(0,o.jsx)(x,{className:"toollist-dropdown-icon",autoFlip:!0}),this.undo)),(0,o.jsx)(a.DropdownItem,{onClick:this.onRedo,className:"dropdown-more-redo",disabled:this.props.stateHistory.future.length<1||f>=92,toggle:!1},(0,o.jsx)("div",{title:this.redo},(0,o.jsx)(O,{className:"toollist-dropdown-icon",autoFlip:!0}),this.redo)),(0,o.jsx)(F,{originalAppInfo:(0,o.Immutable)(m),folderUrl:this.props.folderUrl,appConfig:g,isSave:P,toolListWidth:f,isInDropdown:!0,onSaveSuccess:this.onSaveSuccess,onSaveError:this.onSaveError,saveState:b,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick,clickSaveButtonType:S,clickSaveButtonTypeChange:this.clickSaveButtonTypeChange,setIsOpenSaveAsPopper:this.setIsOpenSaveAsPopper,isOpenSaveAsPopper:y,togglePublishOptionList:this.togglePublishOptionList,saveAsPrivileges:this.props.saveAsPrivileges}),P?(0,o.jsx)(a.DropdownItem,{onClick:void 0,className:"dropdown-more-preview",disabled:f>=184,tag:"a",href:M,rel:"noreferrer",target:"_blank",title:this.preview},(0,o.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,o.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)):(0,o.jsx)(a.DropdownItem,{onClick:this.previewToggle,className:"dropdown-more-preview",disabled:f>=184},(0,o.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,o.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)),!r&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{window.open(`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`)}},this.changeShareSettings),(0,o.jsx)(a.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{window.open(o.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:T}),"_blank"),this.setState({publishOptionsListOpen:!1})}},this.viewPublishedItem),r&&d!==t.Draft&&(0,o.jsx)(a.DropdownItem,{href:`/download/${this.props.currentAppId}?locale=${this.props.intl.locale}&token=${A}`,target:"_blank"},this.props.intl.formatMessage({id:"download",defaultMessage:l.download})),(0,o.jsx)(a.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{this.copyPublishUrlToClipBoard()}},this.copyPublishedItemLink),d!==t.Draft&&(0,o.jsx)("div",{className:"w-100 pl-2 pr-2 center-line"}),d!==t.Draft&&T&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{this.newApp()}},this.createNewExperience),!T&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{this.newApp()}},this.createNew),p===e.Experience&&(0,o.jsx)(a.DropdownItem,{onClick:()=>{this.isConfirmsaveAsTemplate()}},this.generateTemplate))))},this.translationMap[this.save]=this.props.intl.formatMessage({id:"save",defaultMessage:l.save}),this.translationMap[this.saved]=this.props.intl.formatMessage({id:"saved",defaultMessage:l.saved}),this.translationMap[this.saving]=this.props.intl.formatMessage({id:"saving",defaultMessage:l.saving}),this.translationMap[this.saveError]=this.props.intl.formatMessage({id:"saveError",defaultMessage:l.saveError}),this.translationMap[this.saveSuccess]=this.props.intl.formatMessage({id:"saveSuccess",defaultMessage:l.saveSuccess}),this.translationMap[this.publish]=this.nls("publish"),this.translationMap[this.published]=this.props.intl.formatMessage({id:"published",defaultMessage:l.published}),this.translationMap[this.publishing]=this.props.intl.formatMessage({id:"publishing",defaultMessage:l.publishing}),this.translationMap[this.publishError]=this.props.intl.formatMessage({id:"publishError",defaultMessage:l.publishError}),this.translationMap[this.publishSuccess]=this.props.intl.formatMessage({id:"publishSuccess",defaultMessage:l.publishSuccess}),this.undo=this.props.intl.formatMessage({id:"undo",defaultMessage:l.undo}),this.redo=this.props.intl.formatMessage({id:"redo",defaultMessage:l.redo}),this.preview=this.props.intl.formatMessage({id:"preview",defaultMessage:a.defaultMessages.preview}),this.publishTo=this.props.intl.formatMessage({id:"publishTo",defaultMessage:l.publishTo}),this.publishOptions=this.props.intl.formatMessage({id:"publishOptions",defaultMessage:l.publishOptions}),this.copySuccess=this.props.intl.formatMessage({id:"copySuccess",defaultMessage:l.copySuccess}),this.changeShareSettings=this.props.intl.formatMessage({id:"changeShareSettings",defaultMessage:l.changeShareSettings}),this.viewPublishedItem=this.props.intl.formatMessage({id:"viewPublishedItem",defaultMessage:l.viewPublishedItem}),this.copyPublishedItemLink=this.props.intl.formatMessage({id:"copyPublishedItemLink",defaultMessage:l.copyPublishedItemLink}),this.createNew=this.props.intl.formatMessage({id:"createNew",defaultMessage:l.createNew}),this.createNewExperience=this.props.intl.formatMessage({id:"createNewExperience",defaultMessage:l.createNewExperience}),this.generateTemplate=this.props.intl.formatMessage({id:"generateTemplate",defaultMessage:l.generateTemplate}),this.moreOptionsForTool=this.props.intl.formatMessage({id:"moreOptionsForTool",defaultMessage:l.moreOptionsForTool}),this.moreTools=this.props.intl.formatMessage({id:"moreTools",defaultMessage:l.moreTools}),this.access=this.props.intl.formatMessage({id:"access",defaultMessage:l.access}),this.generateTemplateSuccess=this.props.intl.formatMessage({id:"generateTemplateSuccess",defaultMessage:l.generateTemplateSuccess}),this.generateTemplateError=this.props.intl.formatMessage({id:"generateTemplateError",defaultMessage:l.generateTemplateError}),this.clickEventType=W.NewApp,this.state={saveState:s.Save,savedAppConfig:null,toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1,publishOptionsListOpen:!1,moreToolListOpen:!1,isPublished:!1,noteText:"",isToastNote:!1,isShowLeaveAlertPopup:!1,isShowPreviewAlertPop:!1,isProxySettingPopupOpen:!1,toolListWidth:184,newAppId:null,isSaveStateSaved:!1,clickSaveButtonType:null,isOpenSaveAsPopper:!1},this.toolContainer=o.React.createRef()}getStyle(e){var t;return o.css`
      button:disabled:hover,button:disabled, .tool_more_con:disabled:hover, .tool_more_con:disabled{
        color:${e.colors.palette.light[800]};
      }
      button, .tool_more_con button{
        color:${e.colors.palette.dark[400]}
      }
      .tool_more_con button:hover {
        color: ${e.colors.black};
      }
      button:disabled:hover {
        border:none;
      }
      .toollist {
        .toollist-length-screen {
          width: ${o.polished.rem(0)};
          overflow: hidden;
          .tool-hidden {
            display: none;
          }
        }

        @media only screen and (max-width: 1025px) {
          .toollist-length-screen {
            width: ${o.polished.rem(0)};
          }
        }
        @media only screen and (min-width: 1025px) {
          .toollist-length-screen {
            width: ${o.polished.rem(46)};
          }
        }
        @media only screen and (min-width: 1071px) {
          .toollist-length-screen {
            width: ${o.polished.rem(92)};
          }
        }
        @media only screen and (min-width: 1117px) {
          .toollist-length-screen {
            width: ${o.polished.rem(138)};
          }
        }
        @media only screen and (min-width: 1163px) {
          .toollist-length-screen {
            width: ${o.polished.rem(184)};
          }
        }

        .tool_more_content {
          width: ${o.polished.rem(46)};
          .toollist-dropdown-icon{
            margin: 0
          }
        }
        .toollist-item {
          margin: 4px;
          padding: 4px 11px;
          border: 0;
        }
        .toollist-item-icon {
          margin-left: ${o.polished.rem(15)};
          margin-right: ${o.polished.rem(15)};
        }
        .toollist-item-click:focus {
          box-shadow: none !important;
        }
        .toollist-publish {
          border-radius: 2px;
          min-width: 4.25rem;
          height: ${o.polished.rem(26)};
          color: ${e.colors.black};
          background: ${e.colors.palette.light[800]};
          font-size: ${o.polished.rem(13)};
          padding-top: 0;
          padding-bottom: 0;
          border:none;
          &:hover {
            background: ${e.colors.primary};
            border:none;
          }
          &.btn.disabled {
            background-color: ${e.colors.palette.light[800]};
            color: ${e.colors.palette.dark[400]};
            border:none;
          }
        }
        .toollist-publish:focus {
          box-shadow: none !important;
        }

        .btn {
          &.disabled,
          &:disabled {
            background-color: transparent;
          }
        }
        .btn:not(:disabled):not(.disabled):active,
        .btn:not(:disabled):not(.disabled).active,
        .show > .btn.dropdown-toggle {
          color: ${(null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.black)||"black"};
        }
      }

      button:not(:disabled):not(.disabled):active, button:not(:disabled):not(.disabled).active, button[aria-expanded="true"]{
        border:none;
      }
    `}getDropdownStyle(e){return o.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        min-width:${o.polished.rem(220)};
        padding-top: ${o.polished.rem(8)};
        padding-bottom: 0;
      }
      button.save-menu {
        padding-left: ${o.polished.rem(16)};
        margin-bottom: ${o.polished.rem(8)};
      }
      .dropdown-menu--inner {
        .toollist-dropdown-icon {
          margin-right: ${o.polished.rem(8)};
          margin-bottom: ${o.polished.rem(2)};
        }
        &>button, &>a {
          padding-left: ${o.polished.rem(16)};
          margin-bottom: ${o.polished.rem(8)};
        }
        .center-line {
          border-top: 1px solid ${this.props.theme.colors.palette.light[800]};
          margin-bottom: ${o.polished.rem(14)};
          margin-top: ${o.polished.rem(14)};
        }
        button, a {
          box-sizing:border-box;
        }
        .dropdown-more-preview-a {
          color: inherit;
          text-decoration: none;
        }

        @media only screen and (min-width: 1162px) {
          .dropdown-more-preview {
            display: none;
          }
        }
        @media only screen and (max-width: 1162px) {
          .dropdown-more-preview {
            display: flex;
          }
        }
        @media only screen and (min-width: 1116px) {
          .dropdown-more-save {
            display: none;
          }
        }
        @media only screen and (max-width: 1116px) {
          .dropdown-more-save {
            display: flex;
          }
        }
        @media only screen and (min-width: 1070px) {
          .dropdown-more-redo {
            display: none;
          }
        }
        @media only screen and (max-width: 1070px) {
          .dropdown-more-redo {
            display: flex;
          }
        }
        @media only screen and (min-width: 1024px) {
          .dropdown-more-undo {
            display: none;
          }
        }
        @media only screen and (max-width: 1024px) {
          .dropdown-more-undo {
            display: flex;
          }
        }
      }
    `}componentDidMount(){window.onbeforeunload=()=>{if(!this.checkIsSaved())return!1},window.addEventListener("resize",this.updateToollistWidth)}componentWillUnmount(){window.onbeforeunload=null}componentDidUpdate(e){if(this.updateToollistWidth(),this.props.onSaveStatusChanged&&this.props.onSaveStatusChanged(this.checkIsSaved()),this.props.currentAppId!==e.currentAppId){const{publishStatus:e}=this.props;e===t.Draft?this.setState({isPublished:!1}):this.setState({isPublished:!0}),(0,o.getAppStore)().dispatch(n.appStateHistoryActions.InBuilderAppConfigClear())}this.props!==e&&this.props.appConfig&&(this.state.savedAppConfig?this.props.appConfig!==this.state.savedAppConfig?this.setState({saveState:s.Save}):this.setState({saveState:s.Saved}):this.state.saveState===this.saveError&&this.setState({saveState:s.Save}))}render(){var i,n,r,l;const{toolListWidth:d,saveState:c,clickSaveButtonType:u}=this.state,m=window.jimuConfig.isDevEdition,{itemType:g,publishStatus:v,appItem:b,appConfig:f}=this.props,S=m?"":`${this.publishTo} ${this.isInOnLine()?"ArcGIS Online":"Portal for ArcGIS"}`,y=this.state.saveState===s.Saved||(null===(n=null===(i=this.props.stateHistory)||void 0===i?void 0:i.past)||void 0===n?void 0:n.length)<=1&&(null===(l=null===(r=this.props.stateHistory)||void 0===r?void 0:r.future)||void 0===l?void 0:l.length)<1,T=g===e.Template,j=this.props.appConfig&&h.dataComponentsUtils.getWhetherDataSourceIsInited(this.props.dataSources,this.props.dataSourcesInfo),A=o.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:T,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return(0,o.jsx)("div",{className:"float-right d-flex flex-row align-items-center",css:this.getStyle(this.props.theme)},this.isMac()&&(0,o.jsx)(o.Keyboard,{bindings:{"command+keys":()=>{this.saveForkeyBoard()}}}),!this.isMac()&&(0,o.jsx)(o.Keyboard,{bindings:{"ctrl+keys":()=>{this.saveForkeyBoard()}}}),(0,o.jsx)("div",{className:"h-100 toollist d-flex flex-row align-items-center justify-content-end"},(0,o.jsx)("div",{className:"toollist-length-screen d-flex align-items-center justify-content-starth-100 justify-content-start",ref:this.toolContainer},(0,o.jsx)(a.Button,{id:"tooltip_undo",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.past.length<=1),"tool-hidden":d<46}),type:"tertiary",title:this.undo,icon:!0,size:"sm",disabled:this.props.stateHistory.past.length<=1,onClick:this.onUndo},(0,o.jsx)(x,{className:"toollist-item-icon",autoFlip:!0})),(0,o.jsx)(a.Button,{id:"tooltip_redo",className:(0,o.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.future.length<1),"tool-hidden":d<92}),type:"tertiary",title:this.redo,icon:!0,size:"sm",disabled:this.props.stateHistory.future.length<1,onClick:this.onRedo},(0,o.jsx)(O,{className:"toollist-item-icon",autoFlip:!0})),d>=138&&(0,o.jsx)(F,{originalAppInfo:(0,o.Immutable)(b),folderUrl:this.props.folderUrl,appConfig:f,isSave:y,toolListWidth:d,isInDropdown:!1,onSaveSuccess:this.onSaveSuccess,onSaveError:()=>{},saveState:c,onSaveStateChange:this.onSaveStateChange,changePublishStatus:this.props.changePublishStatus,onSaveClick:this.onSaveClick,clickSaveButtonType:u,clickSaveButtonTypeChange:this.clickSaveButtonTypeChange}),y?(0,o.jsx)(a.Button,{icon:!0,size:"sm",tag:"a",href:A,rel:"noreferrer",target:"_blank",title:this.preview,type:"tertiary",className:(0,o.classNames)("toollist-item toollist-item-click",{"tool-hidden":d<184})},(0,o.jsx)(w,{className:"toollist-item-icon"})):(0,o.jsx)(a.Button,{icon:!0,size:"sm",id:"tooltip_preview",title:this.preview,type:"tertiary",onClick:this.previewToggle,className:(0,o.classNames)("toollist-item toollist-item-click",{"tool-hidden":d<184})},(0,o.jsx)(w,{className:"toollist-item-icon"}))),(0,o.jsx)("div",{className:"tool_more_content"},this.renderMore()),(0,o.jsx)(a.Button,{className:"ml-2 toollist-publish",onClick:this.onPublishClick,disabled:v===t.Published||v===t.Publishing||!j,title:S},(0,o.jsx)("span",null,this.getPublishText()))),(0,o.jsx)(a.Toast,{css:this.getTostStyle(),open:this.state.isToastNote,type:a.ToastType.Info,text:this.state.noteText}),(0,o.jsx)(a.AlertPopup,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.getAlertPopOkLabel(),title:this.getAlertPopTitle(),toggle:this.handleToggleForLeaveAlertPopup},(0,o.jsx)("div",{style:{fontSize:"1rem"}},this.nls("headerLeaveDescription"))),(0,o.jsx)(a.AlertPopup,{className:"preview-alert-pop",css:this.previewAlertPopStyle(),isOpen:this.state.isShowPreviewAlertPop,hideOK:!0,hideCancel:!0,title:this.nls("preview"),toggle:this.previewToggle},(0,o.jsx)("div",{className:"preview-alert-pop-content"},this.nls("headerLeaveDescription"),(0,o.jsx)("div",{className:"perview-pop-button-con"},(0,o.jsx)("a",{className:"m-0 p-0 toollist-item-click btn h-100 border-0",onClick:this.previewToggle,href:A,rel:"noreferrer",target:"_blank"},(0,o.jsx)("button",{className:"preview-alert-pop-btn btn-primary"},this.nls("commonModalOk"))),(0,o.jsx)("button",{onClick:this.previewToggle,className:"preview-alert-pop-btn btn-cancle"},this.nls("commonModalCancel"))))),(0,o.jsx)(p.ProxySettingPopup,{isOpen:this.state.isProxySettingPopupOpen,onToggle:this.onToggleProxySettingPopup,onCancel:this.onAppProxiesCancel,onFinish:this.onAppProxiesFinish}))}}const K=(0,u.withTheme)(_),q=o.ReactRedux.connect((e=>({stateHistory:e.appStateHistory,queryObject:e.queryObject,appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig,currentAppId:e.builder&&e.builder.currentAppId,portalUrl:e.portalUrl,dataSources:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dataSources,dataSourcesInfo:e.appStateInBuilder&&e.appStateInBuilder.dataSourcesInfo})))(K);class Q extends o.React.PureComponent{constructor(e){super(e),this.onAppModeChange=()=>{this.props&&(this.getAppDocument(),this.props.appMode===o.AppMode.Run?(this.appFrameDoc&&this.appFrameDoc.body.classList.add("design-mode"),n.builderAppSync.publishAppModeChangeToApp(o.AppMode.Design)):(this.appFrameDoc&&this.appFrameDoc.body.classList.remove("design-mode"),n.builderAppSync.publishAppModeChangeToApp(o.AppMode.Run)))},this.onLockLayoutChange=()=>{const e=(0,n.getAppConfigAction)();this.getAppDocument(),this.appFrameDoc&&(this.props.lockLayout?this.appFrameDoc.body.classList.remove("lock-layout"):this.appFrameDoc.body.classList.add("lock-layout")),e.setLockLayout(!this.props.lockLayout).exec()},this.nls=e=>this.props.intl.formatMessage({id:e,defaultMessage:l[e]}),this.appMode=this.props.intl.formatMessage({id:"appMode",defaultMessage:l.appMode}),this.lockLayout=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:l.headerLockLayout})}getStyle(e){return o.css`
      .lock-layout-label {
        font-weight: 500;
        color: ${e.colors.palette.dark[600]};
        margin-right: ${o.polished.rem(10)};
      }

      .live-view-container {
        cursor: pointer;
        background-color: ${e.colors.primary};
        border-radius: 2px !important;
        color: ${e.colors.black};
        padding-right: ${o.polished.rem(8)};
        padding-left: ${o.polished.rem(8)};
        height: ${o.polished.rem(26)};
        border:1px solid ${e.colors.primary};
      }

      .edit-view-container {
        cursor: pointer;
        border:1px solid ${e.colors.palette.light[800]};
        border-radius: 2px !important;
        color: ${e.colors.palette.dark[600]};
        padding-right: ${o.polished.rem(8)};
        padding-left: ${o.polished.rem(8)};
        height: ${o.polished.rem(26)};

        &:hover {
          color: ${e.colors.black};

          .edit-view-icon {
            border: 1px solid ${e.colors.black};
          }
        }
      }

      .live-view-icon {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${e.colors.black};
      }

      .edit-view-icon {
        width: 7px;
        height: 7px;
        border: 1px solid ${e.colors.palette.dark[800]};
        border-radius: 50%;
      }
    `}getAppDocument(){const e=document.querySelector(`iframe[name="${o.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=e.contentDocument||e.contentWindow.document}render(){const{appMode:e,lockLayout:t}=this.props,s=e===o.AppMode.Run,i=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:l.headerLockLayout});return(0,o.jsx)("div",{className:"d-flex align-items-center",css:this.getStyle(this.props.theme),title:t?this.props.intl.formatMessage({id:"disableLayoutEditing",defaultMessage:l.disableLayoutEditing}):this.props.intl.formatMessage({id:"enableLayoutEditing",defaultMessage:l.enableLayoutEditing})},!s&&(0,o.jsx)("div",{className:"d-flex align-items-center",onClick:this.onLockLayoutChange,style:{cursor:"pointer"}},(0,o.jsx)("div",{className:"lock-layout-label"},i),(0,o.jsx)(a.Switch,{checked:t,"aria-label":i})),(0,o.jsx)("div",{className:"liveview-gap"}),(0,o.jsx)(a.Button,{type:"tertiary",size:"sm",style:{whiteSpace:"nowrap"},className:(0,o.classNames)("d-flex align-items-center",{"live-view-container":s,"edit-view-container":!s}),"aria-pressed":s,title:s?this.nls("turnOffLiveView"):this.nls("turnOnLiveView"),onClick:this.onAppModeChange},(0,o.jsx)("div",{className:(0,o.classNames)("mr-2",{"live-view-icon":s,"edit-view-icon":!s})}),(0,o.jsx)("div",{className:"d-flex align-items-center border-left-0 app-toolbar-mode"},(0,o.jsx)("span",null,this.appMode))))}}const G=(0,u.withTheme)(Q),X=o.ReactRedux.connect((e=>{var t,s,i,o,a;return{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,lockLayout:null!==(a=null===(o=null===(i=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==a&&a}}))(G);var J=d(4065),Z=d.n(J);const ee=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:Z()},s))};var te=d(888),se=d.n(te);const ie=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:se()},s))};var oe=d(4928),ae=d.n(oe);const ne=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:ae()},s))};class re extends o.React.PureComponent{constructor(e){super(e),this.editPageForLargeScreen=this.props.intl.formatMessage({id:"editPageForLargeScreen",defaultMessage:l.editPageForLargeScreen}),this.editPageForMediumScreen=this.props.intl.formatMessage({id:"editPageForMediumScreen",defaultMessage:l.editPageForMediumScreen}),this.editPageForSmallScreen=this.props.intl.formatMessage({id:"editPageForSmallScreen",defaultMessage:l.editPageForSmallScreen})}getStyle(e){var t,s,i;return o.css`
      .device-switch-group {
        margin-right: ${o.polished.rem(10)};
      }

      .device-switch {
        width: ${o.polished.rem(26)};
        height: ${o.polished.rem(26)};
        border-radius: 2px !important;
        border: 0;
        margin-left: 1px;
        margin-right: 1px;

        &:focus {
          box-shadow: none !important;
        }
      }

      .device-switch-gap {
        margin-right: ${o.polished.rem(5)};
      }

      .device-switch-gap button {
        border: none;
      }
      .device-switch-container button {
        color: ${null===(s=null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.dark[400]};
      }
      .device-switch-container button:hover {
        color: ${null===(i=null==e?void 0:e.colors)||void 0===i?void 0:i.black};
      }

      .device-active {
        background-color: ${e.colors.primary} !important;
        color: ${e.colors.black} !important;
      }

      .no-animation {
        transition: none;
        -webkit-transition: none;
      }
    `}onBrowserSizeModeChange(e){n.builderAppSync.publishChangeBrowserSizeModeToApp(e),e!==this.props.browserSizeMode&&n.builderAppSync.publishChangeSelectionToApp(null),this.setState({isDeviceChooseShow:!1})}render(){return(0,o.jsx)("div",{css:this.getStyle(this.props.theme)},(0,o.jsx)(a.AdvancedButtonGroup,{className:"h-100 d-flex align-items-center device-switch-group"},(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container no-animation device-switch-gap"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Large)},active:!this.props.browserSizeMode||this.props.browserSizeMode===o.BrowserSizeMode.Large,className:(0,o.classNames)("device-switch d-flex align-items-center p-0",{"device-active":!this.props.browserSizeMode||this.props.browserSizeMode===o.BrowserSizeMode.Large,"device-disactive":this.props.browserSizeMode&&this.props.browserSizeMode!==o.BrowserSizeMode.Large}),title:this.editPageForLargeScreen},(0,o.jsx)(ee,null))),(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container device-switch-gap"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Medium)},active:this.props.browserSizeMode===o.BrowserSizeMode.Medium,className:(0,o.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===o.BrowserSizeMode.Medium,"device-disactive":!(this.props.browserSizeMode===o.BrowserSizeMode.Medium)}),title:this.editPageForMediumScreen},(0,o.jsx)(ne,null))),(0,o.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container"},(0,o.jsx)(a.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(o.BrowserSizeMode.Small)},"aria-pressed":this.props.browserSizeMode===o.BrowserSizeMode.Small,className:(0,o.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===o.BrowserSizeMode.Small,"device-disactive":!(this.props.browserSizeMode===o.BrowserSizeMode.Small)}),title:this.editPageForSmallScreen},(0,o.jsx)(ie,null)))))}}const le=(0,u.withTheme)(re),pe=o.ReactRedux.connect((e=>({browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode})))(le);var de=d(119),ce=d.n(de);const he=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:ce()},s))};class ue extends o.React.PureComponent{constructor(e){super(e),this.onToggleResolutionChoose=()=>{this.setState({isResolutionChooseShow:!this.state.isResolutionChooseShow})},this.setViewportSize=e=>{(0,n.getAppConfigAction)().setViewportSize(this.props.browserSizeMode,e).exec(),this.setState({isResolutionChooseShow:!1})},this.state={isResolutionChooseShow:!1}}getStyle(e){return o.css`
      .switch-resolution-toggle {
        width: auto;
        font-weight: 500;
        color: ${this.props.theme.colors.palette.dark[600]};
        .switch-label {
          width: auto;
          display: inline-block;
        }
      }
      .dropdown-toggle-content svg {
        margin-right: 0;
        margin-top: ${o.polished.rem(-8)};
        vertical-align: center;
      }
      .no-user-select {
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select :none;
        user-select: none;
      }
    `}getDropdownStyle(e){return o.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        padding-top: ${o.polished.rem(8)};
        padding-bottom: ${o.polished.rem(8)};
      }
    `}render(){const{browserSizeMode:e,viewportSize:t,pageMode:s,appMode:i}=this.props,n=s===o.PageMode.FitWindow?"":this.props.nls("auto"),r=t?`${t.width} × ${s!==o.PageMode.FitWindow&&i===o.AppMode.Design?n:t.height}`:"";let l=o.CONSTANTS.SCREEN_RESOLUTIONS[e]||[];if(s!==o.PageMode.FitWindow){const e={},t=[];l.forEach((s=>{null==e[s.width]&&(t.push(s),e[s.width]=s)})),l=t}return(0,o.jsx)("div",{css:this.getStyle(this.props.theme)},(0,o.jsx)("div",{className:"sr-only",id:"app-resolution-select"},this.props.nls("changeScreenSize")),(0,o.jsx)(a.Dropdown,{size:"sm",toggle:this.onToggleResolutionChoose,isOpen:this.state.isResolutionChooseShow,className:"resolution-choose"},(0,o.jsx)(a.DropdownButton,{css:o.css`line-height: 1.5rem;`,"aria-label":`Resolution: ${r}`,"aria-describedby":"app-resolution-select",size:"sm",type:"tertiary",arrow:!1,className:"switch-resolution-toggle lin",title:this.props.nls("changeScreenSize")},(0,o.jsx)("span",{className:"switch-label"},r),(0,o.jsx)(he,{size:"s"})),(0,o.jsx)(a.DropdownMenu,{css:this.getDropdownStyle(this.props.theme)},l.map(((e,t)=>(0,o.jsx)(a.DropdownItem,{key:t,className:"no-user-select",onClick:()=>{this.setViewportSize(e)}},`${e.width} × ${s!==o.PageMode.FitWindow&&i===o.AppMode.Design?n:e.height}`))))))}}const me=(0,u.withTheme)(ue),ge=o.ReactRedux.connect((e=>{var t,s,i,a,n,r;const l=e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode;let p;e.appStateInBuilder&&(p=o.utils.findViewportSize(e.appStateInBuilder.appConfig,l));const d=e.appStateInBuilder&&e.appStateInBuilder.appRuntimeInfo.currentPageId;let c;return d&&(c=null===(a=null===(i=null===(s=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.pages)||void 0===i?void 0:i[d])||void 0===a?void 0:a.mode),{viewportSize:p,pageMode:c,appMode:null===(r=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo)||void 0===r?void 0:r.appMode,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode}}))(me);var ve=d(4767),be=d.n(ve);const fe=e=>{const{className:t}=e,s=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),i=(0,o.classNames)("jimu-icon-component",t);return o.React.createElement(a.Icon,Object.assign({className:i,icon:be()},s))};var we;!function(e){e.OrgAdmin="org_admin",e.OrgPublisher="org_publisher",e.OrgUser="org_user",e.CustomRoles="custom_roles"}(we||(we={}));class Se extends o.React.PureComponent{constructor(s){super(s),this.titleTextInput=o.React.createRef(),this.spanTextInput=o.React.createRef(),this.originTitleMaxWidth=300,this.currentToolContainerWidth=0,this.currentPublishStateContainerWidth=0,this.getHelpUrl=()=>{var e;null===(e=null===n.helpUtils||void 0===n.helpUtils?void 0:n.helpUtils.getHomeHelpLink())||void 0===e||e.then((e=>{e&&this.setState({helpUrl:e})}))},this.editTitle=e=>{let t=e;const{appItem:s}=this.state;if(t=t.replace(/(^\s*)|(\s*$)/g,""),0===t.length||/^[ ]*$/.test(t)||t===s.title)return t=s.title,this.setState({titleText:t}),!1;r.appServices.updateAppInfo({id:this.props.queryObject.id,title:t,owner:s.owner}).then((()=>{this.props.dispatch(n.builderActions.refreshAppListAction(!0)),n.builderAppSync.publishAppInfoChangeToApp({name:t}),s.title=t,this.setState({appItem:s,titleText:t})}),(e=>{console.error(e)}))},this.refreshTitle=t=>{const s=this.state.itemType;o.portalUtils.getAppInfo(t).then((t=>{const i=t.type===e.Experience?e.Experience:e.Template,o=i===e.Template&&s!==i;this.getPublishStatusAndKewWorkd(t),this.setState({titleText:t.title,itemType:i,itemId:t.id,appItem:this.initAppInfo(t),isShowTemplateRemind:o})}),(e=>{console.error(e)}))},this.resetTitle=e=>{this.setState({titleText:e})},this.initAppInfo=e=>(e.isLocalApp=window.jimuConfig.isDevEdition,e.portalUrl=this.props.portalUrl,e),this.getPublishStatusAndKewWorkd=e=>{const s=e.typeKeywords||[];let{publishStatus:i}=this.state;s.forEach((e=>{if(e.includes("status:"))switch(e.split(": ")[1]){case t.Published:i=t.Published;break;case t.Changed:i=t.Changed;break;case t.Draft:i=t.Draft}})),this.setState({publishStatus:i})},this.getPublishString=()=>{const{publishStatus:e}=this.state;switch(e){case t.Draft:return this.nls("itemStatusDraft");case t.Published:return this.nls("published");case t.Changed:return this.nls("unpublishedChanges")}},this.changePublishStatus=e=>{this.setState({publishStatus:e})},this.titleTextChange=e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),this.setState({titleText:t})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:l[e]}):e,this.handleKeydown=e=>{"Enter"===e.key&&this.titleTextInput.current.blur()},this.onToolContainerResize=e=>{this.currentToolContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.onHeaderContainerResize=()=>{this.checkAndResizeTileMaxWidth()},this.onPublishStateContainerResized=e=>{this.currentPublishStateContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.checkAndResizeTileMaxWidth=()=>{if(!this.currentToolContainerWidth||!this.currentPublishStateContainerWidth)return;const e=window.innerWidth-this.currentToolContainerWidth-52-this.currentPublishStateContainerWidth;e>=this.originTitleMaxWidth?this.setState({titleMaxWidth:this.originTitleMaxWidth}):e<=40?this.setState({titleMaxWidth:40}):this.setState({titleMaxWidth:e})},this.getItemPublishStatusTitle=()=>{const{publishStatus:e}=this.state;let s="";switch(e){case t.Draft:s=this.nls("draftStatusTitle");break;case t.Published:s=this.nls("publishedTitle");break;case t.Changed:s=this.nls("publishedUnsaveTitle")}return s},this.getTemplatePopperStyle=()=>{const{theme:e}=this.props;return o.css`
      &{
        background: ${e.colors.palette.light[600]};
        color: ${e.colors.black};
        border: 1px solid ${e.colors.palette.light[300]};
        box-sizing: border-box;
        padding: ${o.polished.rem(10)} ${o.polished.rem(12)};
        border-radius: 2px;
        box-shadow: 0 0 10px 2px ${o.polished.rgba(e.colors.white,.2)};
      }
      .template-remind-porper {
        div{
          white-space: nowrap;
          text-align: center;
          font-size: ${o.polished.rem(13)};
          line-height: ${o.polished.rem(13)};
          margin-bottom: ${o.polished.rem(14)};
        }
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::before{
        border-right-color: ${e.colors.palette.light[300]};
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::after {
        border-right-color: ${e.colors.palette.light[600]};
      }
    `},this.closeTemplateRemind=()=>{this.setState({isShowTemplateRemind:!1})},this.onSaveStatusChanged=e=>{this.setState({isAppSaved:e})},this.checkIsOwner=()=>{var e,t;const s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appInfo,{user:i}=this.props;return(null==i?void 0:i.username)===(null==s?void 0:s.owner)},this.checkSaveAsPrivileges=()=>{var e,t;const s=null===(t=null===(e=(0,o.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appInfo,{user:i}=this.props,a=null==s?void 0:s.isOrgItem;return this.checkIsOwner()||(null==i?void 0:i.role)===we.OrgAdmin&&a},this.state={titleText:"",accountPopoverOpen:!1,itemType:e.Experience,itemId:"",titleMaxWidth:this.originTitleMaxWidth,publishStatus:t.Draft,isShowTemplateRemind:!1,isAppSaved:!0,showTitle:!0,helpUrl:"#"}}getStyle(){const e=this.props.theme,{colors:t}=e;return o.css`
      .widget-builder-header {
        background-color: ${t.palette.light[500]};
        border: 1px solid ${t.palette.light[800]};
        padding-left: ${o.polished.rem(12)};
        overflow: auto;

        .header-logo {
          a {
            margin-right:${o.polished.rem(6)};
          }
          .header-logo-item {
            height: ${o.polished.rem(32)};
            width: ${o.polished.rem(32)};
            background: url('./assets/exb-logo.png') no-repeat center;
            background-size: 100%;
            &:hover {
              background: url(${d(1262)}) no-repeat center;
              background-size: 100%;
            }
          }
        }

        .app-type {
          background: ${t.palette.secondary[400]};
          color: ${t.palette.info[700]};
          border-radius: 2px;
          font-size: ${o.polished.rem(10)};
          white-space: nowrap;
          width: ${o.polished.rem(24)};
          padding: ${o.polished.rem(2)} 0;
          text-align: center;
        }
        .publish-state {
          margin-left: ${o.polished.rem(9)};
          max-width: ${o.polished.rem(152)};
          height: ${o.polished.rem(18)};
        }
        .publish-state div {
          background: ${t.palette.success[800]};
          border-radius: 2px;
          font-size: ${o.polished.rem(10)};
          line-height: ${o.polished.rem(18)};
          position: relative;
          white-space: nowrap;
          padding: 0 ${o.polished.rem(6)};
          text-align: center;
          color: ${t.palette.success[100]};
          max-width: ${o.polished.rem(150)};
          font-weight: bold;
        }
        .publish-state .Draft{
          color: ${t.palette.warning[100]};
          background: ${t.palette.warning[800]};
        }
        .publish-state .Changed{
          color: ${t.palette.danger[100]};
          background: ${t.palette.danger[800]};
        }
        .header-title-maxwidth-screen {
        }

        .app-title-content {
          width: 100%;
          height: ${o.polished.rem(28)};
          min-width: ${o.polished.rem(40)};
          position: relative;
          .title-placeholder {
            width: auto;
            padding: 0 0.5rem;
            font-size: ${o.polished.rem(16)};
            visibility: hidden;
            pointer-events: none;
          }
        }
        .header-title-input {
          position: absolute;
          width: 100%;
          height: 100%;
          .input-wrapper {
            background-color: transparent;
            input {
              font-size: ${o.polished.rem(16)};
              color: var(--dark-800);
            }
          }
          min-width: ${o.polished.rem(40)};
        }
        .header-title-input {
          left: 0;
          top: 0;
          width: 100%;
        }
        .title-text-placeholder {
          display: block;
          opacity: 0;
          padding-left:${o.polished.rem(5)};
          padding-right:${o.polished.rem(7)};
          word-spacing: ${o.polished.rem(6)};
        }

        .header-account {
          float: left;
          color: ${e.colors.black};
          padding-left: ${o.polished.rem(20)};

          div {
            background-color: initial;
          }

          &:hover {
            // background-color: ${e.colors.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${e.colors.black};
        }

        .header-login-username {
          color: ${e.colors.black};
          margin-left: 5px;
          font-size: 14px;
        }

        .toollist-seperateline {
          margin-left: ${o.polished.rem(16)};
          height: 30px;
          border: 1px solid ${e.colors.palette.light[800]};
        }

        .liveview-gap {
          margin-right: ${o.polished.rem(20)};
        }

        .dropdown-toggle-content {
          margin-top: ${o.polished.rem(4)};
        }
      }

      .account-dropdown-toggle:focus {
        box-shadow: none !important;
      }`}componentDidMount(){this.props.queryObject.id&&this.refreshTitle(this.props.queryObject.id),this.getHelpUrl()}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,s){const{currentPageId:i}=this.props;if(s&&(this.setState({titleText:""}),this.refreshTitle(this.props.queryObject.id)),e.currentPageId!==i){let e=!0;"template"===i&&(e=!1),this.setState({showTitle:e})}}getQuery(e){return o.queryString.parse(window.location.search)[e]||""}render(){const t=this.getQuery("locale")?`?locale=${this.getQuery("locale")}`:"",{itemType:s,publishStatus:i,titleText:n,titleMaxWidth:r,isShowTemplateRemind:l,showTitle:p}=this.state,d=this.checkSaveAsPrivileges();return(0,o.jsx)("div",{css:this.getStyle(),className:"h-100"},(0,o.jsx)("div",{className:"widget-builder-header d-flex justify-content-between h-100 pr-0 border-left-0 border-right-0 border-top-0",style:{overflowX:"hidden"}},(0,o.jsx)("div",{className:"d-flex"},(0,o.jsx)("div",{className:"header-logo d-flex align-items-center"},(0,o.jsx)("a",{href:`${window.jimuConfig.mountPath+t}`,title:this.nls("headerHome")},(0,o.jsx)("div",{className:"header-logo-item d-block"})),p&&(0,o.jsx)("div",{className:"header-title d-flex align-items-center header-title-maxwidth-screen",style:{maxWidth:r}},(0,o.jsx)("div",{className:"app-title-content flex-grow-1"},(0,o.jsx)("span",{className:"title-placeholder text-truncate"},n),(0,o.jsx)(a.TextInput,{ref:this.titleTextInput,className:"header-title-input font-weight-normal",value:n,onAcceptValue:this.editTitle,onChange:this.titleTextChange,onKeyDown:this.handleKeydown,borderless:!0})))),(0,o.jsx)("div",{className:"d-flex align-items-center"},(0,o.jsx)("div",{ref:e=>{this.reference=e}},s===e.Template&&(0,o.jsx)("div",{title:this.nls("appTypeTemplate"),className:"app-type  position-relative"},(0,o.jsx)(fe,{className:"toollist-item-icon",size:"l"}),(0,o.jsx)(a.Popper,{reference:this.reference,open:l,showArrow:!0,toggle:this.closeTemplateRemind,placement:"right-end",offset:[-8,0],css:this.getTemplatePopperStyle()},(0,o.jsx)("div",{className:"template-remind-porper"},(0,o.jsx)("div",null,this.nls("templateRemind")),(0,o.jsx)(a.Button,{type:"primary",className:"float-right",size:"sm",onClick:this.closeTemplateRemind},this.nls("gotIt")),(0,o.jsx)("span",{className:"position-absolute"}))))),(0,o.jsx)(a.Tooltip,{title:this.getItemPublishStatusTitle(),describeChild:!0,showArrow:!0},(0,o.jsx)(a.Button,{type:"tertiary",size:"sm",className:"publish-state position-relative p-0"},(0,o.jsx)("div",{className:(0,o.classNames)("text-truncate",i)},this.getPublishString()))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onPublishStateContainerResized}))),(0,o.jsx)("div",{className:"d-flex align-items-center justify-content-end"},(0,o.jsx)(X,{intl:this.props.intl}),(0,o.jsx)("div",{className:"liveview-gap"}),(0,o.jsx)(pe,{intl:this.props.intl}),(0,o.jsx)(ge,{nls:this.nls}),(0,o.jsx)("div",{className:"toollist-seperateline border-bottom-0 border-top-0 border-left-0 mt-1 mb-1 ml-1 mr-1"}),(0,o.jsx)(q,{theme:this.props.theme,itemId:this.state.itemId,itemType:this.state.itemType,intl:this.props.intl,appItem:this.state.appItem,publishStatus:this.state.publishStatus,changePublishStatus:this.changePublishStatus,titleText:n,locale:this.getQuery("locale")||"",onSaveStatusChanged:this.onSaveStatusChanged,folderUrl:this.props.context.folderUrl,resetTitle:this.resetTitle,saveAsPrivileges:d}),(0,o.jsx)("div",{className:"float-right d-flex justify-content-end"},this.props.user&&(0,o.jsx)(a.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,isAppSaved:this.state.isAppSaved,helpUrl:this.state.helpUrl})),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onToolContainerResize}))),(0,o.jsx)(o.ReactResizeDetector,{handleWidth:!0,onResize:this.onHeaderContainerResize}))}}Se.mapExtraStateProps=e=>({currentPageId:e.appRuntimeInfo&&e.appRuntimeInfo.currentPageId,queryObject:e.queryObject})})(),c})())}}}));
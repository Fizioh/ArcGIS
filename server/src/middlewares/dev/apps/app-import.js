"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,s,l,u){return new(l=l||Promise)(function(i,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?i(e.value):((t=e.value)instanceof l?t:new l(function(e){e(t)})).then(r,n)}o((u=u.apply(e,s||[])).next())})},__generator=this&&this.__generator||function(i,r){var n,o,s,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,o=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(s=0<(s=l.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){l.label=t[1];break}if(6===t[0]&&l.label<s[1]){l.label=s[1],s=t;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(t);break}s[2]&&l.ops.pop(),l.trys.pop();continue}t=r.call(i,l)}catch(e){t=[6,e],o=0}finally{n=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.unZipToFolder=exports.isProtocolRelative=exports.removeProtocol=exports.importApp=void 0;var fs=require("fs-extra"),semver=require("semver"),fetch=require("cross-fetch"),path=require("path");require("../../../global");var utils_1=require("./utils");require("isomorphic-form-data"),global.fetch=fetch;var WidgetInfoType,JSZip=require("jszip"),multer=require("@koa/multer"),importAppMulter=getImportAppMulter();function importApp(c,r){return __awaiter(this,void 0,void 0,function(){var p,t,i=this;return __generator(this,function(e){switch(e.label){case 0:p={error:{message:"",errorCode:null,success:!1,checkWidgetVersionResult:[],appVersion:null}},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,importAppMulter.single("appZip")(c,r).then(function(e){return __awaiter(i,void 0,void 0,function(){var t,i,r,n,o,s,l,u,a;return __generator(this,function(e){switch(e.label){case 0:return c.type="json",t=c.request.body||{},i=(null===(u=c.request.file)||void 0===u?void 0:u.path)||"",r=null===(a=null==i?void 0:i.split("apps\\")[1])||void 0===a?void 0:a.split("\\importAppZip")[0],n=utils_1.appFolderPath+"/"+r,u=path.join(n,"/resources/config/config.json"),[4,checkIsAppValid(i)];case 1:return e.sent()||!1?[4,(0,exports.unZipToFolder)(i,n)]:(p.error.message="Invalid App",p.error.errorCode="001",fs.removeSync(n),[2,(0,utils_1.requestException)(p,c)]);case 2:return(e.sent(),a=checkAppVersion(u,null==t?void 0:t.currentVersion),o=getZipAppversion(u),a)?checkIsSamePortal(u,t.portalUrl)?checkIsSameType(n,t.type)?0<(null==(a=checkWidgetVersion(u))?void 0:a.length)?(s=a.map(function(e){return e.widgetLabel+","+e.widgetVersionInZip}).join("\n"),s="Fail to import. Some widgets used in the app are newer version. App name:["+t.title+"], widget: "+s,p.error.errorCode="005",p.error.message=s,p.error.checkWidgetVersionResult=a,fs.removeSync(n),[2,(0,utils_1.requestException)(p,c)]):[4,copyCustomWidget(u,n)]:(s="Failed to import app. This is an app template. Please switch to the Templates tab and try again.",p.error.message="Web Experience"===t.type?s:"Failed to import template. This is an app. Please switch to the Apps tab and try again.",p.error.errorCode="004",p.error.appVersion=o,fs.removeSync(n),[2,(0,utils_1.requestException)(p,c)]):(p.error.message="Failed to import the app. This app can only be imported by users of portal: "+t.portalUrl+" ",p.error.errorCode="003",p.error.appVersion=o,fs.removeSync(n),[2,(0,utils_1.requestException)(p,c)]):(p.error.message="Failed to import the app "+t.title+" . This app is created by a newer version "+o+" of ArcGIS Experience Builder.",p.error.errorCode="002",p.error.appVersion=o,fs.removeSync(n),[2,(0,utils_1.requestException)(p,c)]);case 3:return e.sent(),fs.removeSync(path.join(n,"/importAppZip")),updateNewAppConfig(u,t.portalUrl),null!=t&&t.typeKeywords?((l=Array.isArray(t.typeKeywords)?t.typeKeywords:t.typeKeywords.split(",")).push("version: "+o),t.typeKeywords=l):delete t.typeKeywords,delete t.snippet,delete t.thumbnail,delete t.currentVersion,fs.ensureDirSync(utils_1.appFolderPath),l=Date.now(),t.id=r,t.created=l,t.modified=l,t.owner=t.username,t.thumbnail=getThumbnailUrl(n),delete(l=__assign(__assign({},utils_1.infoJson),t)).text,l=(0,utils_1.deepClone)(l),fs.ensureDirSync(n),l=JSON.stringify(l,null,2),fs.writeFileSync(n+"/info.json",l),l={__not_publish:!0},l=JSON.stringify(l),fs.writeFileSync(n+"/config.json",l),l={folder:"apps/"+r,id:r,success:!0},(0,utils_1.commonResponse)(c,l),[2]}})})}).catch(function(e){p.error.message=e,c.body=p})];case 2:return e.sent(),[3,4];case 3:return t=e.sent(),p.error.message=t,(0,utils_1.writeResponseLog)(t,!0),c.body=p,[3,4];case 4:return[2]}})})}function getThumbnailUrl(e){var e=path.join(e,"config.json");if(!fs.existsSync(e))return null;e=JSON.parse(fs.readFileSync(e,"utf8"));return(null===(e=null==e?void 0:e.attributes)||void 0===e?void 0:e.thumbnail)||null}function checkAppVersion(e,t){if(!fs.existsSync(e))return!1;e=getZipAppversion(e);return!(!e||!t)&&!semver.gt(e,t)}function getZipAppversion(e){if(!fs.existsSync(e))return null;e=JSON.parse(fs.readFileSync(e,"utf8"));return null==e?void 0:e.exbVersion}function updateNewAppConfig(e,t){if(!fs.existsSync(e))return null;var i=JSON.parse(fs.readFileSync(e,"utf8"))||{};delete i.appProxies,delete i.historyLabels;i=JSON.stringify(i,null,2);fs.writeFileSync(e,i)}function checkIsSamePortal(e,t){if(!fs.existsSync(e))return null;var e=JSON.parse(fs.readFileSync(e,"utf8"))||{},e=(null===(e=null===e?void 0:e.attributes)||void 0===e?void 0:e.portalUrl)||"";if(!e)return!1;e=(0,exports.removeProtocol)(e);return(0,exports.removeProtocol)(t)==e}function checkIsSameType(e,t){var e=path.join(e,"config.json");if(!fs.existsSync(e))return!1;e=JSON.parse(fs.readFileSync(e,"utf8"))||{},e=(null===(e=null===e?void 0:e.attributes)||void 0===e?void 0:e.type)||"";return!e||(null==e?void 0:e.trim())===(null==t?void 0:t.trim())}!function(e){e.ExistedInfo="ExistedInfo",e.Info="Info"}(WidgetInfoType=WidgetInfoType||{}),exports.importApp=importApp;var removeProtocol=function(e,t){void 0===t&&(t=!1);return(0,exports.isProtocolRelative)(e)?e.slice(2):(e=e.replace(/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,""),t&&1<e.length&&"/"===e[0]&&"/"===e[1]?e.slice(2):e)};exports.removeProtocol=removeProtocol;var isProtocolRelative=function(e){return null!=e&&void 0!==e&&"/"===e[0]&&"/"===e[1]};function getImportAppMulter(){var e=multer.diskStorage({destination:function(e,t,i){try{Promise.resolve(!0).then(function(){fs.ensureDirSync(utils_1.appFolderPath);var e=fs.readdirSync(utils_1.appFolderPath),e=(0,utils_1.getFolderIndex)(e,0)+"",e=utils_1.appFolderPath+"/"+e;fs.mkdirSync(e);e+="/importAppZip";fs.emptyDirSync(e),i(null,e)})}catch(e){console.log(e)}},filename:function(e,t,i){var r=t.originalname.split("."),t=r[r.length-1];i(null,"appZip."+(t=1==r.length?"zip":t))}});return multer({storage:e})}function checkIsAppValid(r){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(e){switch(e.label){case 0:return[4,verifyUploadedAppZip(r)];case 1:return t=e.sent()||[],i=!0,null!=t&&t.forEach(function(e){i=i&&e}),[2,i]}})})}function verifyUploadedAppZip(e){var t=[];return t.push(checkFileExistInZip(e,"config.json")),t.push(checkFolderExistInZip(e,"jimu-ui")),t.push(checkFolderExistInZip(e,"jimu-theme")),t.push(checkFolderExistInZip(e,"jimu-layouts")),t.push(checkFolderExistInZip(e,"jimu-core")),t.push(checkFolderExistInZip(e,"jimu-for-builder")),t.push(checkFolderExistInZip(e,"widgets")),t.push(checkFolderExistInZip(e,"config")),Promise.all(t)}function checkFileExistInZip(t,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,JSZip.loadAsync(fs.readFileSync(t)).then(function(e){e=e.file(new RegExp(i));return!!(e&&e.length&&0<e.length)})]})})}function checkFolderExistInZip(t,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,JSZip.loadAsync(fs.readFileSync(t)).then(function(e){e=e.folder(new RegExp(i));return!!(e&&e.length&&0<e.length)})]})})}exports.isProtocolRelative=isProtocolRelative;var unZipToFolder=function(t,r){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,(new JSZip).loadAsync(fs.readFileSync(t)).then(function(t){var i=[];return fs.ensureDirSync(r),Object.keys(t.files).forEach(function(e){-1<(null==e?void 0:e.indexOf("/resources"))?i.push(createFileOfResources(e,r,t)):-1<(null==e?void 0:e.indexOf("/config.json"))&&3===(null==e?void 0:e.split("/").length)?i.push(createFileOfResources(e,r,t,!0)):-1<(null==e?void 0:e.indexOf("/widgets"))?i.push(createWidgetsFile(e,r,t)):-1<(null==e?void 0:e.indexOf("/thumbnail/"))&&i.push(createThumbnailFile(e,r,t))}),Promise.all(i)})]})})};function createFileOfResources(e,t,i,r){r=(r=void 0===r?!1:r)?"config.json":"resources/"+(null==e?void 0:e.split("/resources/")[1]);return createFile(e,path.join(t,r),i)}function createWidgetsFile(e,t,i){t=path.join(t,"importAppZip/widgets/"+(null==e?void 0:e.split("/widgets/")[1]));return createFile(e,t,i)}function createThumbnailFile(e,t,i){t=path.join(t,"/thumbnail/"+(null==e?void 0:e.split("/thumbnail/")[1]));return createFile(e,t,i)}function createFile(r,n,o){return __awaiter(this,void 0,void 0,function(){var t,i;return __generator(this,function(e){return t=o.file(r),i=normalizeZipPath(n),null==t||!0===t.dir?(fs.ensureDirSync(i),[2,Promise.resolve()]):[2,t.async("nodebuffer").then(function(e){return fs.writeFileSync(i,e)})]})})}function normalizeZipPath(e){return e=(e=path.normalize(e)).replace(/\\/g,"/")}function checkWidgetVersion(e){var r,n,o,t=path.join(utils_1.CLIENT_PATH,utils_1.DIST_FOLDER),s=[],l=JSON.parse(fs.readFileSync(e,"utf8")),u=getAllWidgetsInfo(t,WidgetInfoType.Info)||[],t=l.widgets||{};if(l.widgets)for(var i in t)!function(e){var t=null===(r=l.widgets)||void 0===r?void 0:r[e],i=null===(n=u.filter(function(e){return e.uri===t.uri}))||void 0===n?void 0:n[0],e=null==t?void 0:t.version;!i||0===(null==u?void 0:u.length)||(i=null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.version,!semver.gt(e,i))||s.push({widgetLabel:null==t?void 0:t.lable,widgetVersionInZip:e})}(i);return s}function copyCustomWidget(i,l){return __awaiter(this,void 0,void 0,function(){var r,t,n,o,s;return __generator(this,function(e){switch(e.label){case 0:return r=path.join(utils_1.CLIENT_PATH,utils_1.DIST_FOLDER),t=JSON.parse(fs.readFileSync(i,"utf8")),t=(0,utils_1.getWidgetsUriFromAppConfig)(t),t=(null==t?void 0:t.customWidgetsUri)||[],n=getAllWidgetsInfo(r,WidgetInfoType.Info)||getAllWidgetsInfo(r,WidgetInfoType.ExistedInfo)||[],o=getAllWidgetsInfo(r,WidgetInfoType.ExistedInfo)||getAllWidgetsInfo(r,WidgetInfoType.Info)||[],s=getAllWidgetsInfo(l+"/importAppZip",WidgetInfoType.Info)||[],[4,Promise.all(t.map(function(t){if(0<(null===(e=null==n?void 0:n.filter(function(e){return(null==e?void 0:e.uri)===t}))||void 0===e?void 0:e.length)||0<(null===(i=null==o?void 0:o.filter(function(e){return(null==e?void 0:e.uri)===t}))||void 0===i?void 0:i.length))return Promise.resolve();var e,i=null===(e=null==s?void 0:s.filter(function(e){return(null==e?void 0:e.uri)===t}))||void 0===e?void 0:e[0];return i&&((e=getCustomWidgetInfoIndex())||0===e?n.splice(e,0,i):n.push(i),e=JSON.stringify(n,null,2),fs.writeFileSync(path.join(r,utils_1.WIDGET_INFO_PATH),e),fs.existsSync(path.join(r,utils_1.WIDGET_EXISTED_INFO_PATH))&&(o.push(i),i=JSON.stringify(o,null,2),fs.writeFileSync(path.join(r,utils_1.WIDGET_EXISTED_INFO_PATH),i))),fs.existsSync(path.join(r,t))?void 0:fs.copy(path.join(l+"/importAppZip",t),path.join(r,t))}))];case 1:return e.sent(),[2]}})})}function getCustomWidgetInfoIndex(){var e=path.join(utils_1.CLIENT_PATH,utils_1.DIST_FOLDER),i=getLastExistedWidgetUri(),e=getAllWidgetsInfo(e,WidgetInfoType.Info)||[],r=null;return e.forEach(function(e,t){e.uri===i&&(r=t+1)}),r}function getLastExistedWidgetUri(){var e=path.join(utils_1.CLIENT_PATH,utils_1.DIST_FOLDER);if(fs.existsSync(path.join(e,utils_1.WIDGET_EXISTED_INFO_PATH))){var e=getAllWidgetsInfo(e,WidgetInfoType.ExistedInfo);return null===(e=null==e?void 0:e[(null==e?void 0:e.length)-1])||void 0===e?void 0:e.uri}return null}function getAllWidgetsInfo(e,t){return(e=(t=void 0===t?WidgetInfoType.ExistedInfo:t)===WidgetInfoType.Info?fs.existsSync(path.join(e,utils_1.WIDGET_INFO_PATH))?path.join(e,utils_1.WIDGET_INFO_PATH):null:fs.existsSync(path.join(e,utils_1.WIDGET_EXISTED_INFO_PATH))?path.join(e,utils_1.WIDGET_EXISTED_INFO_PATH):null)?JSON.parse(fs.readFileSync(e,"utf8")):null}exports.unZipToFolder=unZipToFolder;
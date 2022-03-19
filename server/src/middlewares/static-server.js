"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStaticServeMiddleWares=void 0;var noCacheStaticServe=require("koa-static"),cacheStaticServe=require("koa-static-cache"),mount=require("koa-mount"),path=require("path"),exb_404_1=require("./common/exb-404");function getStaticServeMiddleWares(){var e=global.isDevEdition,t=global.mountPath,a=global.commander,i=e?0:72e6,r=e?{maxage:i}:{maxage:i,buffer:!0,dynamic:!0,preload:!0},i=e||!a.enable_file_cache?noCacheStaticServe:cacheStaticServe,a=path.join(__dirname,"../../../client/dist/"),a=[(0,exb_404_1.handle404)({path:path.join(a,"experience/"),urlPath:t+"experience/",mountPath:t}),(0,exb_404_1.handle404)({path:path.join(a,"template/"),urlPath:t+"template/",mountPath:t}),(0,exb_404_1.handle404)({path:path.join(a,"builder/"),urlPath:t+"builder/",mountPath:t}),(0,exb_404_1.handle404)({path:path.join(a,"site/"),urlPath:t+"site/",mountPath:t})];return a.push(mount(t,i(path.join(__dirname,"../../../client/dist/"),r))),e&&a.push(mount("/apps/",i(path.join(__dirname,"../../../server/public/apps"),r))),a}exports.getStaticServeMiddleWares=getStaticServeMiddleWares;
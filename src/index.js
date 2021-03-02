import path from "path";
import Koa from "koa";
import koaBody from "koa-body";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import routers from "./routers";
import koaStatic from "koa-static";
import compose from "koa-compose";
import compress from 'koa-compress'
import ip from "ip";
const app = new Koa();
const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production'

//使用koa-compose集成中间件
const middleware = compose([
  // 处理post请求的参数
  koaBody(), 
  // 静态服务器
  koaStatic(path.resolve(__dirname, "../public")), 
  // 跨域处理
  cors(),
  // 增加安全的头部信息
  helmet(),
]);

if(isProd){
  // 压缩中间件
  app.use(compress())
}

// 使用全部中间件
app.use(middleware);
// 使用全部路由
app.use(routers());

app.listen(3000, () => {
  console.log("App running at: ");
  console.log("- Local：","\x1b[32m",`http://localhost:${PORT}`,"\x1b[0m")
  console.log("- Network:","\x1b[32m",`http://${ip.address()}:${PORT}`,"\x1b[0m")
});

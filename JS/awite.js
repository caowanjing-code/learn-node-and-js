const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();



app.use(async (ctx,next)=>{
    // 打印url
    console.log(`${ctx.request.method}${ctx.request.url}`);
    await next();
});
app.use(async (ctx,next)=>{
    const start=new Date().getTime();
    await next();
    const ms=new Date().getTime-start;
    console.log(`Time:${ms}ms`);//打印时间
});

app.use(async (ctx,next)=>{
    await next();
    ctx.response.type='text/html';
    ctx.response.body='<h1>hello，koa</h1>'
});

app.listen(3002);
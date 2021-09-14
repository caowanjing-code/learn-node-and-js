// require('babel-register');
// // 应用的其余 require 需要被放到 hook 后面
// const app = require('./app');


const Koa=require('koa');
const app=new Koa();

// app.use(async ctx=> {
//     ctx.body='hello world!qqqq';
// })

// app.listen(3000);

// logger
app.use(async (ctx,next)=>{
    await next();
    const rt=ctx.response.get('X-response-time');
    console.log(`${ctx.method} ${ctx.url} -${rt}`);
});

// x-response-time
app.use(async (ctx,next)=>{
    const start=Date.now();
    await next();
    const ms=Date.now()-start;
    ctx.set('X-response-time',`${ms}ms`);
});


// response
app.use(async ctx=>{
    ctx.body='hello world';
})

app.listen(3000);
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();


app.use(async ctx=> {
    ctx.body='hello world!qqqq';
})
http.createServer(app.callback()).listen(3000);

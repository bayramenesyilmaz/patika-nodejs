const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {

    if (ctx.path === "/") {

        ctx.body = "<h4>Index sayfası</h4>";

    } else if (ctx.path === "/about") {

        ctx.body = "<h4>About sayfası</h4>";

    } else if (ctx.path === "/contact") {

        ctx.body = "<h4>Contact sayfası</h4>";

    } else {

        await next();

    }
})

app.listen(3000);
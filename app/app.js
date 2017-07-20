const Koa = require('koa');

const app = new Koa();
const cors = require('koa-cors');
app.use(cors());
// 代理
// http://10.1.156.29:9988/
// http://m.chebada.com/
const proxy = require('./proxy.js')
app.use(proxy('/api', {
    target: 'http://m.chebada.com/',
    changeOrigin: true,
    rewrite: path => {
        return path.replace(/^\/api/, '')
    },
    logs: true
}))

app.on('error', function(err) {
    console.log(err, 'app');
});

app.listen(9090, function() {
    console.log('server start', 9090);
})

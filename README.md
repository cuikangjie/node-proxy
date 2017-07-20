# node-proxy

> node代理服务  解决跨域问题

> 依赖 koa

- 安装依赖
```
npm install
```

- 运行
```
npm start
```
- 配置 （修改 ./app/app.js）
```javascript
app.use(proxy('/api'/*拦截请求*/, {
    target: 'http://www.baidu.com/',//转发地址
    changeOrigin: true,
    rewrite: path => {
        return path.replace(/^\/api/, '') //url重定向
    },
    logs: true
}))
```

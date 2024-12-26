// 解决跨域的问题
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
// /api 表示代理路径
//target 表示目标服务器的地址
    app.use(
        '/devApi',
        createProxyMiddleware({
            // http://localhost:4000/ 地址只是示例，实际地址以项目为准
            target:'http://localhost:8001',
            // 跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路由
            pathRewrite: {
                '^/devApi': '',// 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
            }
        })
    );
    // 可以有多个
    app.use(
        '/admin/example',
        createProxyMiddleware({
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
        })
    );
}
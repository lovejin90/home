const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://ggoyo.com:8022/agents",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 하위 url 초기화
            }

        })

    );

    app.use(
        '/server',
        createProxyMiddleware({
            target: "http://ggoyo.com:8022/menu/getList",
            changeOrigin: true,
            pathRewrite: {
                '^/menu/getList': '' // 하위 url 초기화
            }
        })

    );
};
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ggoyo.com:8022/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // 하위 url 초기화
      },
    })
  );

  app.use(
    "/lh_api",
    createProxyMiddleware({
      target: "http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1",
      changeOrigin: true,
      pathRewrite: {
        "^/lh_api": "", // 하위 url 초기화
      },
    })
  );
};

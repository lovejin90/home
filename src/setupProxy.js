const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ggoyo.com:8022/",
      changeOrigin: true,
    })
  );

  app.use(
    "/lh_api",
    createProxyMiddleware({
      target: "http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1",
      changeOrigin: true,
    })
  );
};

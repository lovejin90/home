const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.ggoyo.com",
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

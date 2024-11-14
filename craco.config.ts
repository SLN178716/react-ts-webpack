import path from "path";
// @ts-ignore
import cracoLessPlugin from "craco-less";

const pathResolve = (pathUrl: string) => path.resolve(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  entry: pathResolve("src/index.tsx"), // 打包入口
  output: {
    filename: "bundle.js",
    path: pathResolve("dist"),
  },
  plugins: [
    {
      plugin: cracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "@primary-color": "#1890ff",
            },
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
    configure(webpackConfig: any) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [
        ...webpackConfig.resolve.extensions,
        ...[".less", ".css"],
      ];
      return webpackConfig;
    },
  },
  devServer: {
    // 本地服务的端口号
    port: 3001,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
};

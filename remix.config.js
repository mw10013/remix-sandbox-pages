/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // browserNodeBuiltinsPolyfill: {
  //   modules: {
  //     buffer: true,
  //     crypto: true,
  //     fs: "empty",
  //     stream: true,
  //     util: true,
  //   },
  //   globals: {
  //     Buffer: true,
  //   },
  // },
  serverNodeBuiltinsPolyfill: {
    // modules: { buffer: true, crypto: true, fs: "empty", stream: true },
    modules: { crypto: true, stream: true },
    globals: {
      // Buffer: true,
      process: true,
    },
  },
};

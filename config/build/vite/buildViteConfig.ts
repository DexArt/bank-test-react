import { UserConfig } from "vite";
import * as path from "path";
import { BuildViteOptions } from "./types/viteTypes";
import { buildPlugins } from "./plugins/buildPlugins";
import { devServerConfig } from "./server/devServerConfig";

export function buildViteConfig(options: BuildViteOptions): UserConfig {
  const { mode, isDev } = options;

  console.log("BUILD OPTIONS: ", options);

  return {
    plugins: buildPlugins(),
    assetsInclude: ["*.ttf"],
    server: isDev ? devServerConfig : undefined,
    define: {
      __IS_DEV__: isDev,
      ...(mode === "development" ? { global: "window" } : {}),
    },
    resolve: {
      alias: {
          "@": path.resolve(__dirname, "../../../src"),
        config: path.resolve(__dirname, "../../../src/config"),
        app: path.resolve(__dirname, "../../../src/app"),
        shared: path.resolve(__dirname, "../../../src/shared"),
        entities: path.resolve(__dirname, "../../../src/entities"),
        features: path.resolve(__dirname, "../../../src/features"),
        pages: path.resolve(__dirname, "../../../src/pages"),
        widgets: path.resolve(__dirname, "../../../src/widgets"),
      },
    },
    build: {
      sourcemap: isDev ? "inline" : undefined,
      outDir: "./build",
      modulePreload: false,
      /*minify: "terser",
                  terserOptions: {
                     module: true,
                     compress: true,
                  },*/
      rollupOptions: {
        treeshake: true,
        output: {
          entryFileNames: `main.js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
  };
}

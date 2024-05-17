// vite.config.ts
import {ConfigEnv, defineConfig, UserConfig} from "vite";
import {buildViteConfig} from "./config/build/vite/buildViteConfig";
import {BuildViteMode} from "./config/build/vite/types/viteTypes";

//ChunkSplitPlugin -> see docs https://www.npmjs.com/package/vite-plugin-chunk-split

export default defineConfig((config: ConfigEnv): UserConfig => {
  const isDev =
      (config.mode as BuildViteMode) === ("development" as BuildViteMode);
  const modeEnv =
      (config.mode as BuildViteMode) || ("development" as BuildViteMode);
  return buildViteConfig({ mode: modeEnv, isDev });
});
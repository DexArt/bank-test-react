import {Plugin, PluginOption} from "vite";
import viteReact from "@vitejs/plugin-react";

export function buildPlugins(): (Plugin | Plugin[] | Promise<Plugin | Plugin[]> | PluginOption[])[] {
   return [
      viteReact(),
      /*splitVendorChunkPlugin(),
        chunkSplitPlugin(chunkSplitConfig),*/
      /*compression({
            deleteOriginalAssets: true,
            algorithm: "gzip",
        }),*/
   ];
}

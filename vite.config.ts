import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// `unchained-bitcoin` package needs those polyfills to work on the browser
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
  optimizeDeps: {
    exclude: ["crypto"],
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});

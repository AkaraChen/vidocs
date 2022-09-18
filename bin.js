"use strict";
import { createServer, build as createBuild } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-vue-markdown";
import { ViteMinifyPlugin as minify } from "vite-plugin-minify";
import Shiki from "markdown-it-shiki";
import mila from "markdown-it-link-attributes";
import path from "path";
async function configPlugin() {
  const virtualModuleId = "virtual:config";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  const configFile = (await import(`file://${path.resolve(process.cwd(), "./vidocs.config.js")}`)).default;
  return {
    name: "config-plugin",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const config = ${JSON.stringify(configFile)}`;
      }
    }
  };
}
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const config = (docsDir) => {
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      Markdown({
        headEnabled: true,
        markdownItSetup: (md) => {
          md.use(Shiki, {
            theme: "nord"
          });
          md.use(mila, {
            attrs: {
              target: "_blank",
              rel: "noopener"
            }
          });
        }
      }),
      Pages({ dirs: docsDir, extensions: ["md", "vue"] }),
      minify(),
      configPlugin()
    ],
    configFile: false,
    root: __dirname
  };
};
export const dev = async () => {
  const server = await createServer({
    mode: "development",
    server: {
      port: 1337
    },
    ...config(path.resolve(process.cwd(), "./docs"))
  });
  await server.listen();
  server.printUrls();
};
export const build = async () => {
  await createBuild({
    ...config("docs"),
    build: {
      rollupOptions: {
        output: {
          dir: path.resolve(process.cwd(), "./dist")
        }
      },
      outDir: path.resolve(process.cwd(), "./dist")
    }
  });
};

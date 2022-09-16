import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-vue-markdown";
import { ViteMinifyPlugin as minify } from "vite-plugin-minify";
import Shiki from "markdown-it-shiki";
import mila from "markdown-it-link-attributes";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup: (md) => {
        md.use(Shiki, {
          theme: "nord",
        });
        md.use(mila, {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        });
      },
    }),
    Pages({ dirs: "docs", extensions: ["md", "vue"] }),
    minify(),
  ],
});

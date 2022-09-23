import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-vue-markdown";
import Shiki from "markdown-it-shiki";
import mila from "markdown-it-link-attributes";

export default defineConfig({
  plugins: [
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
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({ dirs: "./docs", extensions: ["md", "vue"] }),
  ],
  root: __dirname,
});

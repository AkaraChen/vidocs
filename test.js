import { dev, build } from "./bin.js"

const run = async () => {
  await build()
  await dev()
}

run()
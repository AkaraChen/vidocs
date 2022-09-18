#!/usr/bin/env node
import { build, dev } from "./bin.js"

const command = process.argv.slice(1)[1]

switch (command) {
  case "build":
    build()
    break
  case "dev":
    dev()
    break
  default:
    console.warn("Invalid parameter")
    process.exit(1)
}
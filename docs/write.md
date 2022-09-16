---
title: Write
---

# Write

Vidocs automatically generates an array of routes determined by the structure of the files in your docs directory. Simply create `.md` files in your docs directory and routes will automatically be created for you, no additional configuration required!

Vidcos will automatically map files from your pages directory to a route with the same name:

| File                | Route        |
| ------------------- | ------------ |
| docs/something.md   | /something   |
| docs/lorem/ipsum.md | /lorem/ipsum |

Docs with the name `index.md` are treated as the index page of a route:

| File                   | Route     |
| ---------------------- | --------- |
| docs/index.md          | /         |
| docs/anything/index.md | /anything |

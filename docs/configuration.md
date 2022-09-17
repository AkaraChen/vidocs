---
title: Configuration
---

# Configuration

Just edit `vidocs.config.js`, here is the example:

```js
{
  name: "Vidocs",
  sidebar: [
    { name: "Index", link: "/" },
    { name: "Configuration", link: "/configuration" },
    {
      name: "Something",
      list: [{ name: "Anything", link: "/something/anything" }],
    },
  ],
  nav: [
    { name: "Home", link: "/" },
    { name: "Github", link: "https://github.com/akarachen/vidocs" },
  ],
  text: {
    toTop: "Back To Top",
    menu: "Menu",
  },
}
```

## name

The name of your docs, which will displayed on navbar.

## sidebar

The index of your docs. Supports secondary catalogue.

## nav

Display some link on navbar.

## text

Customize some text.

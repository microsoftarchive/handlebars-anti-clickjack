# What is this?
Simple handlebars helper for preventing iframe click jacking

# Why should I use it?
Educate yaself https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet

# How do I use it?
`npm install --save handlebars-anti-clickjack`

Wherever you are handling your helpers, add it like so:
```
var clicky = require('handlebars-anti-clickjack')
clicky.register(handlebars)
```

In the `head` of your main template add `{{{anti-clickjack}}}`

# How do i use a custom name for the helper
```
var clicky = require('handlebars-anti-clickjack')
handlebars.registerHelper('my-helper', clicky.helper(handlebars))
```
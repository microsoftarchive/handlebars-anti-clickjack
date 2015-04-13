# What is this?
Simple handlebars helper for preventing iframe click jacking

# Why should I use it?
Educate yaself https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet

# How do I use it?
`npm install handlebars-anti-clickjack`

Wherever you are handling your helpers, add it like so: `hbs.registerHelper('anti-clickjack', require('handlebars-anti-clickjack')(hbs));`

In the `head` of your main template add `{{{anti-clickjack}}}`
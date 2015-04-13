'use strict';

var fs = require('fs');
var path = require('path');
var options = { 'encoding': 'utf8' };

function createId () {
  return (10e8 * Math.random()).toString(16);
}

function helper (handlebars) {
  var baseDir = path.resolve(__dirname);
  var templateFile = path.resolve(baseDir, 'snippet.hbs');
  var template = fs.readFileSync(templateFile, options);

  handlebars = handlebars || require('handlebars');
  template = handlebars.compile(template);

  return function () {
    var markup = template({
      'id': createId()
    });
    return new handlebars.SafeString(markup);
  };
}

function register (handlebars) {
  handlebars.registerHelper('anti-clickjack', helper(handlebars));
}

module.exports = register;
module.exports.register = register;
module.exports.helper = helper;

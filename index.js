var Handlebars = require('handlebars');
module.exports = function ()  {

  'use strict';

  function createId () {
    var d = new Date();
    return d.getMinutes() + '-' + d.getMilliseconds() + '-' + d.getHours();
  }

  var args = arguments;
  function createHTML () {
    var id = createId();

    return new Handlebars.SafeString(
      "<style id='" + id + "'>" +
        "body {" +
          "display:none !important;" +
        "}" +
      "</style>" +
      "<script type='text/javascript'>" +
        "if (self === top) {" +
          "var antiClickjack = document.getElementById('" + id + "');" +
          "antiClickjack.parentNode.removeChild(antiClickjack);" +
        "} else {" +
          "top.location = self.location;" +
        "}" +
      "</script>");
  }

  return createHTML();
};

/**
 * font-checker.js
 *
 * Released under MIT License.
 * Copyright (c) 2015 Rémi Becheras All rights reserved
 *
 * License: https://github.com/rbecheras/js-font-checker/blob/master/LICENSE
 */

/*global jQuery:true */

module.exports = (function(){

  Object.defineProperties(FontChecker.prototype, {
    'REFERENCE_STRING':{
        value: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        writable: false
    },
    'REFERENCE_FONTNAME':{
        value: '"Comic Sans MS"',
        writable: false
    }
  });

  function FontChecker(document){

    var styleDef = '#font-checker, #font-test-bed { position: absolute; left: -9999px; top: 0; visibility: hidden}';
    styleDef += '#font-installed-test { font-size: 50px !important; font-family: ' + this.REFERENCE_FONTNAME + '}';

    this.notInstalledWidth = 0;
    this.testBed = null;
    this.guid = 0;

    $(document).ready(function () {
      if ($('#font-checker').length) return;
      $('head').append($('<style/>',{text:styleDef}));


      $('body').append('<div id="fontTestBed"></div>').append('<span id="fontInstalledTest" class="fonttest">' + test_string + '</span>');
      testbed = $('#fontTestBed');
      notInstalledWidth = $('#fontInstalledTest').width();
    });

    function () {
    },

    return {
        // must be called when the dom is ready
        setup :

        isInstalled : function(font) {
            guid++;

            var style = '<' + 'style id="fonttestStyle"> #fonttest' + guid + ' { font-size: 50px!important; font-family: ' + font + ', ' + test_font + '; } <' + '/style>';

            $('head').find('#fonttestStyle').remove().end().append(style);
            testbed.empty().append('<span id="fonttest' + guid + '" class="fonttest">' + test_string + '</span>');

            return (testbed.find('span').width() != notInstalledWidth);
        }
    };

  }
})();

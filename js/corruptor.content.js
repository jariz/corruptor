/**
 * Corruptor content script
 **/


(function () {
    "use strict";

    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!sheet.rules) continue;
        for (var j = 0; j < sheet.rules.length; j++) {
            var rule = sheet.rules[j];
            if(rule.type === CSSRule.STYLE_RULE) {
                
            }
        }
    }
})()
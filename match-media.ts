// Typescript IIFE - shim should not leave any global footprint
(() => {

    function mediaHandler(mql: any) {
        console.log(mql);
    }

    for (var i = 0; i < document.styleSheets.length; i++) {
        let rules = (<CSSStyleSheet>document.styleSheets[i]).cssRules;

        for (var j = 0; j < rules.length; j++) {
            if (rules[j].type === CSSRule.MEDIA_RULE) {
                window.matchMedia((<CSSMediaRule>rules[j]).media.mediaText).addListener(mediaHandler);
            }
        }
    }

})();

(function(){{
    // lang value must be a valid identifier
    if (!ridentifier.test(lang || '')) {
        Sizzle.error('unsupported lang: ' + lang);
    }
    lang = lang.replace(runescape, funescape).toLowerCase();
    return function (elem) {
        var elemLang;
        do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute('xml:lang') || elem.getAttribute('lang')) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
            }
        } while ((elem = elem.parentNode) && elem.nodeType === 1);
        return false;
    };
}})();
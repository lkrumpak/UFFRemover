(function(){{
    text = text.replace(runescape, funescape);
    return function (elem) {
        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
    };
}})();
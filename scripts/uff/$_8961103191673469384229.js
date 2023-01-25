(function(){{
    var attrId = id.replace(runescape, funescape);
    return function (elem) {
        return elem.getAttribute('id') === attrId;
    };
}})();
(function(){{
    'production' !== 'development' ? invariant(!/\s/.test(className), 'CSS.hasClass takes only a single class name.') : invariant(!/\s/.test(className));
    if (element.classList) {
        return !!className && element.classList.contains(className);
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}})();
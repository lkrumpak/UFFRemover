(function(){{
    'production' !== 'development' ? invariant(!/\s/.test(className), 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className));
    if (className) {
        if (element.classList) {
            element.classList.remove(className);
        } else if (CSSCore.hasClass(element, className)) {
            element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ')    // multiple spaces to one
.replace(/^\s*|\s*$/g, '');    // trim the ends
        }
    }
    return element;
}})();
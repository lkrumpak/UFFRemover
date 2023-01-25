(function(){{
    'production' !== 'development' ? invariant(!/\s/.test(className), 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className));
    if (className) {
        if (element.classList) {
            element.classList.add(className);
        } else if (!CSSCore.hasClass(element, className)) {
            element.className = element.className + ' ' + className;
        }
    }
    return element;
}})();
(function(){{
    if (!elm || !elm.className) {
        return false;
    }
    var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');
    elm.className = elm.className.replace(reg, '$2');
}})();
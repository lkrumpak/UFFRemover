(function(){{
    el.removeAttribute(attr);
    if (hasBooleanProperty(el, attr))
        el[attr] = false;
}})();
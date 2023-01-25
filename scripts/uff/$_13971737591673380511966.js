(function(){{
    listen(el, compute, function (ev, newVal) {
        elements.setAttr(el, attributeName, getValue(newVal));
    });
    elements.setAttr(el, attributeName, getValue(compute()));
}})();
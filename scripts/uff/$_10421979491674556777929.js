(function(){{
    var setter = elements.attrMap[attrName];
    if (setter === true) {
        el[attrName] = false;
    } else if (typeof setter === 'string') {
        el[setter] = '';
    } else {
        el.removeAttribute(attrName);
    }
}})();
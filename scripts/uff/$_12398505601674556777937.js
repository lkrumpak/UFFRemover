(function(){{
    var parts = getAttributeParts(newVal), newAttrName = parts.shift();
    // Remove if we have a change and used to have an `attrName`.
    if (newAttrName !== attrName && attrName) {
        elements.removeAttr(el, attrName);
    }
    // Set if we have a new `attrName`.
    if (newAttrName) {
        elements.setAttr(el, newAttrName, parts.join('='));
        attrName = newAttrName;
    }
}})();
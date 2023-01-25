(function(){{
    // Set the existing or create a new attribute node
    var ret = elem.getAttributeNode(name);
    if (!ret) {
        elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
    }
    ret.value = value += '';
    // Break association with cloned elements by also using setAttribute (#9646)
    if (name === 'value' || value === elem.getAttribute(name)) {
        return value;
    }
}})();
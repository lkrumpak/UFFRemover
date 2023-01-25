(function(){{
    var ret, hooks, notxml, nType = elem.nodeType;
    // Don't get/set properties on text, comment and attribute nodes
    if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
    }
    notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
    if (notxml) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
    }
    if (value !== undefined) {
        return hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
    } else {
        return hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
    }
}})();
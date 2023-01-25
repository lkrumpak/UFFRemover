(function(){{
    var ret;
    if (!isXML) {
        return (ret = elem.getAttributeNode(name)) && ret.value !== '' ? ret.value : null;
    }
}})();
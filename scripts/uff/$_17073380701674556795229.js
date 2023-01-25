(function(){{
    var ret = elem.getAttributeNode(name);
    if (ret && ret.specified) {
        return ret.value;
    }
}})();
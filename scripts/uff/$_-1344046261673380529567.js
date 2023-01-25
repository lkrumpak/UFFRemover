(function(){{
    while (elem = elem[dir]) {
        if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
        }
    }
}})();
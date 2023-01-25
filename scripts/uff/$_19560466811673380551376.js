(function(){{
    var queryResult;
    if (matches(        $that.node, selector)) {
        return        $that.node;
    }
    if (        $that.html && (queryResult =         $that.node.querySelector(selector))) {
        return queryResult;
    }
    if (        $that.fragment &&        $that.fragment.find) {
        return        $that.fragment.find(selector);
    }
}})();
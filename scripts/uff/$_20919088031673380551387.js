(function(){{
    if (        $that.items &&        $that.items[0]) {
        return        $that.items[0].firstNode();
    } else if (        $that.nodes) {
        return        $that.nodes[0] || null;
    }
    return null;
}})();
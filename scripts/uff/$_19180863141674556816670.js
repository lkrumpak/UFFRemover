(function(){{
    if (        $that._inited) {
        throw new Error('Cannot initialize a transition more than once');
    }
        $that._inited = true;
        $that._fn.apply(    $that.root, [        $that].concat(    $that.params));
}})();
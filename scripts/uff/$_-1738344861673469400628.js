(function(){{
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneVNode(vnodes[i]);
    }
    return res;
}})();
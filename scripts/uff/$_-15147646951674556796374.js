(function(){{
    var strip = node.strip || {}, ret;
    if (strip.left) {
                $that.opcode('strip');
    }
    ret =     $that[node.type](node);
    if (strip.right) {
                $that.opcode('strip');
    }
    return ret;
}})();
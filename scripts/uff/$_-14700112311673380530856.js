(function(){{
    var pairs = hash.pairs, pair, val;
        $that.opcode('pushHash');
    for (var i = 0, l = pairs.length; i < l; i++) {
        pair = pairs[i];
        val = pair[1];
        if (            $that.options.stringParams) {
            if (val.depth) {
                                $that.addDepth(val.depth);
            }
                        $that.opcode('getContext', val.depth || 0);
                        $that.opcode('pushStringParam', val.stringModeValue, val.type);
            if (val.type === 'sexpr') {
                // Subexpressions get evaluated and passed in
                // in string params mode.
                                $that.sexpr(val);
            }
        } else {
                        $that.accept(val);
        }
                $that.opcode('assignToHash', pair[0]);
    }
        $that.opcode('popHash');
}})();
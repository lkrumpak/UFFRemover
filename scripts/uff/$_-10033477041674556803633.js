(function(){{
    var pairs = hash.pairs, i, l;
        $that.opcode('pushHash');
    for (i = 0, l = pairs.length; i < l; i++) {
                $that.pushParam(pairs[i][1]);
    }
    while (i--) {
                $that.opcode('assignToHash', pairs[i][0]);
    }
        $that.opcode('popHash');
}})();
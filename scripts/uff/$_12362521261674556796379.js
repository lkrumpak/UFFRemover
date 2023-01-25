(function(){{
    var i = params.length, param;
    while (i--) {
        param = params[i];
        if (            $that.options.stringParams) {
            if (param.depth) {
                                $that.addDepth(param.depth);
            }
                        $that.opcode('getContext', param.depth || 0);
                        $that.opcode('pushStringParam', param.stringModeValue, param.type);
            if (param.type === 'sexpr') {
                // Subexpressions get evaluated and passed in
                // in string params mode.
                                $that.sexpr(param);
            }
        } else {
                        $that[param.type](param);
        }
    }
}})();
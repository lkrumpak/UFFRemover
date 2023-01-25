(function(){{
    var params = sexpr.params;
        $that.pushParams(params);
        $that.opcode('pushProgram', program);
        $that.opcode('pushProgram', inverse);
    if (sexpr.hash) {
                $that.hash(sexpr.hash);
    } else {
                $that.opcode('emptyHash');
    }
    return params;
}})();
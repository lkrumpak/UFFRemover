(function(){{
        $that.sexpr(mustache.sexpr);
    if (mustache.escaped && !        $that.options.noEscape) {
                $that.opcode('appendEscaped');
    } else {
                $that.opcode('append');
    }
}})();
(function(){{
        $that.pushContext();
        $that.pushString(type);
    // If it's a subexpression, the string result
    // will be pushed after this opcode.
    if (type !== 'sexpr') {
        if (typeof string === 'string') {
                        $that.pushString(string);
        } else {
                        $that.pushStackLiteral(string);
        }
    }
}})();
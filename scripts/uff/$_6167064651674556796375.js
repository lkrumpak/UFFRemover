(function(){{
    var id = sexpr.id;
    if (id.type === 'DATA') {
                $that.DATA(id);
    } else if (id.parts.length) {
                $that.ID(id);
    } else {
        // Simplified ID for `this`
                $that.addDepth(id.depth);
                $that.opcode('getContext', id.depth);
                $that.opcode('pushContext');
    }
        $that.opcode('resolvePossibleLambda');
}})();
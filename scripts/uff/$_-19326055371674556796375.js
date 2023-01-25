(function(){{
    var id = sexpr.id, name = id.parts[0], isBlock = program != null || inverse != null;
        $that.opcode('getContext', id.depth);
        $that.opcode('pushProgram', program);
        $that.opcode('pushProgram', inverse);
        $that.opcode('invokeAmbiguous', name, isBlock);
}})();
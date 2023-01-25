(function(){{
    var mustache = block.mustache, program = block.program, inverse = block.inverse;
    if (program) {
        program =         $that.compileProgram(program);
    }
    if (inverse) {
        inverse =         $that.compileProgram(inverse);
    }
    var sexpr = mustache.sexpr;
    var type =     $that.classifySexpr(sexpr);
    if (type === 'helper') {
                $that.helperSexpr(sexpr, program, inverse);
    } else if (type === 'simple') {
                $that.simpleSexpr(sexpr);
        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
                $that.opcode('pushProgram', program);
                $that.opcode('pushProgram', inverse);
                $that.opcode('emptyHash');
                $that.opcode('blockValue');
    } else {
                $that.ambiguousSexpr(sexpr, program, inverse);
        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
                $that.opcode('pushProgram', program);
                $that.opcode('pushProgram', inverse);
                $that.opcode('emptyHash');
                $that.opcode('ambiguousBlockValue');
    }
        $that.opcode('append');
}})();
(function(){{
    // Just return if an already-compile AST was passed in.
    if (input.constructor === AST.ProgramNode) {
        return input;
    }
    parser.yy = AST;
    return parser.parse(input);
}})();
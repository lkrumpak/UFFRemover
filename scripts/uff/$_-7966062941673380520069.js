(function(){{
    if (input == null || typeof input !== 'string' && input.constructor !== env.AST.ProgramNode) {
        throw new Exception('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
    }
    options = options || {};
    if (!('data' in options)) {
        options.data = true;
    }
    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}})();
(function(){{
    var funDecl = {
        type: Syntax.FunctionDeclaration,
        id: id,
        params: params,
        defaults: defaults,
        body: body,
        rest: rest,
        generator: generator,
        expression: expression,
        returnType: returnType,
        typeParameters: typeParameters
    };
    if (isAsync) {
        funDecl.async = true;
    }
    return funDecl;
}})();
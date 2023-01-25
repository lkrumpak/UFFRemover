(function(){{
    if (!compiled) {
        compiled = compileInput();
    }
    return compiled.call(    $that, context, options);
}})();
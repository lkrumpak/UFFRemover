(function(){{
    if (!compiled) {
        compiled = compileInput();
    }
    return compiled._setup(options);
}})();
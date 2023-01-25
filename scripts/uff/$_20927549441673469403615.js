(function(){{
    if (!compiled) {
        compiled = compileInput();
    }
    return compiled._child(i, data, depths);
}})();
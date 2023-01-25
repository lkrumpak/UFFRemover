(function(){{
    if (code) {
        code = JSON.parse(code);
    }
    return new Config(name, src, code);
}})();
(function(){{
    return string == null ? '' : String(string).replace(/[&<>"']/g, function (match) {
        return htmlEscapes[match];
    });
}})();
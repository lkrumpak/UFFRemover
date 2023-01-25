(function(){{
    var parts = repeaterValue.match(regex.repeat);
    if (!parts) {
        return;
    }
    var name = parts[1];
    scope[name] = data;
}})();
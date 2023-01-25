(function(){{
    clearScope(scope);
    for (var d in data) {
        if (data.hasOwnProperty(d)) {
            scope[d] = data[d];
        }
    }
}})();
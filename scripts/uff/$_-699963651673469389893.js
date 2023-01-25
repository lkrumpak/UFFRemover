(function(){{
    for (var key in scope) {
        if (scope.hasOwnProperty(key)) {
            if (key.substr(0, 1) !== '_') {
                scope[key] = null;
                delete scope[key];
            }
        }
    }
}})();
(function(){{
    for (var i = 0, len =             $that.context.environments.length; i < len; i++) {
        var environment =         $that.context.environments[i];
        if (environment && environment.equals(child)) {
            return i;
        }
    }
}})();
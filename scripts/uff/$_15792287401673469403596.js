(function(){{
    if (arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
    } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception('Missing helper: \'' + arguments[arguments.length - 1].name + '\'');
    }
}})();
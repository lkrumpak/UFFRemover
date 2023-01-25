(function(){{
    if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1;
    } else {
        return pattern.test(name);
    }
}})();
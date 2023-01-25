(function(){{
    if (Array.isArray(x)) {
        return x.concat();
    } else if (x && typeof x === 'object') {
        return assign(new x.constructor(), x);
    } else {
        return x;
    }
}})();
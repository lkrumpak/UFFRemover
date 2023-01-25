(function(){{
    var d =         $that, c = Array.prototype.slice.call(arguments);
    a = c.shift();
    return function () {
        return d.apply(a, c.concat(Array.prototype.slice.call(arguments)));
    };
}})();
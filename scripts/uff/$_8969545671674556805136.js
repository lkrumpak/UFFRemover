(function(){{
    var a = [].slice.call(arguments).concat(args);
    obj[method].apply(obj, a);
}})();
(function(){{
    return function (ev) {
        var arguments$1 = arguments;
        var single = arguments.length === 1;
        for (var i = 0; i < arr.length; i++) {
            single ? arr[i](ev) : arr[i].apply(null, arguments$1);
        }
    };
}})();
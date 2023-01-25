(function(){{
    var args = slice.call(arguments, 2);
        $that.get(keypath).forEach(function (fn) {
        fn.apply(context || this, args);
    });
}})();
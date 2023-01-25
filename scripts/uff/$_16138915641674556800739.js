(function(){{
    var called = false;
    return function () {
        if (!called) {
            called = true;
            fn();
        }
    };
}})();
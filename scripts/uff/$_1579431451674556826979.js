(function(){{
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }
    setTimeout(function () {
        newAction._dispatch.apply(null, args);
    });
}})();
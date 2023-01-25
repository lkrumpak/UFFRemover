(function(){{
    for (var _len10 = arguments.length, args = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
        args[_key10 - 2] = arguments[_key10];
    }
        $that.createStore.apply(    $that, [
        StoreModel,
        name
    ].concat(args));
}})();
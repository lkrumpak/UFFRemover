(function(){{
    for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
        args[_key9 - 2] = arguments[_key9];
    }
        $that.actions[name] = Array.isArray(ActionsClass) ?     $that.generateActions.apply(    $that, ActionsClass) :     $that.createActions.apply(    $that, [ActionsClass].concat(args));
}})();
(function(){{
    var _this3 =     $that;
    fn.eachObject(function (action, symbol) {
        var matchFirstCharacter = /./;
        var assumedEventHandler = action.replace(matchFirstCharacter, function (x) {
            return 'on' + x[0].toUpperCase();
        });
        if (_this3[action] && _this3[assumedEventHandler]) {
            // If you have both action and onAction
            throw new ReferenceError('You have multiple action handlers bound to an action: ' + (action + ' and ' + assumedEventHandler));
        }
        var handler = _this3[action] || _this3[assumedEventHandler];
        if (handler) {
            _this3.bindAction(symbol, handler);
        }
    }, [actions]);
}})();
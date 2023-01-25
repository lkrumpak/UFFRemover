(function(){{
    fn.assign(actions, utils.getInternalMethods(ActionsClass, true));
    var ActionsGenerator = function (_ActionsClass) {
        _inherits(ActionsGenerator, _ActionsClass);
        function ActionsGenerator() {
            _classCallCheck(this, ActionsGenerator);
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }
            _get(Object.getPrototypeOf(ActionsGenerator.prototype), 'constructor', this).apply(this, args);
        }
        _createClass(ActionsGenerator, [{
                key: 'generateActions',
                value: function generateActions() {
                    for (var _len6 = arguments.length, actionNames = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                        actionNames[_key6] = arguments[_key6];
                    }
                    actionNames.forEach(function (actionName) {
                        actions[actionName] = utils.dispatchIdentity;
                    });
                }
            }]);
        return ActionsGenerator;
    }(ActionsClass);
    for (_len4 = _arguments2.length, argsForConstructor = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        argsForConstructor[_key4 - 2] = _arguments2[_key4];
    }
    fn.assign(actions, new (_bind.apply(ActionsGenerator, [null].concat(_toConsumableArray(argsForConstructor))))());
}})();
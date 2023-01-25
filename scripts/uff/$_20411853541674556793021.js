(function(){{
    var result = value;
    if (result instanceof LazyWrapper) {
        result = result.value();
    }
    var index = -1, length = actions.length;
    while (++index < length) {
        var action = actions[index];
        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
    }
    return result;
}})();
(function(){{
    var funcName = getFuncName(func);
    if (!(funcName in LazyWrapper.prototype)) {
        return false;
    }
    var other = lodash[funcName];
    if (func === other) {
        return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
}})();
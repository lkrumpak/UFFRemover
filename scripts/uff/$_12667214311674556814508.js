(function(){{
    var result;
        $that.some(function (value, index, list) {
        if (iterator.call(context, value, index, list)) {
            result = value;
            return true;
        }
    });
    return result;
}})();
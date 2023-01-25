(function(){{
    var iterator = typeof value === 'function' ? value : function (obj) {
        return obj[value];
    };
    return obj.map(function (value, index, list) {
        return {
            value: value,
            index: index,
            criteria: iterator.call(context, value, index, list)
        };
    }).sort(function (left, right) {
        var a = left.criteria;
        var b = right.criteria;
        if (a !== b) {
            if (a > b || a === void 0)
                return 1;
            if (a < b || b === void 0)
                return -1;
        }
        return left.index - right.index;
    }).map(function (item) {
        return item.value;
    });
}})();
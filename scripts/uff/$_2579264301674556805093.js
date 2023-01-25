(function(){{
    var initial = arguments.length > 2;
    if (obj == null)
        obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
        if (context)
            iterator = _.bind(iterator, context);
        return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
        var keys = _.keys(obj);
        length = keys.length;
    }
    each(obj, function (value, index, list) {
        index = keys ? keys[--length] : --length;
        if (!initial) {
            memo = obj[index];
            initial = true;
        } else {
            memo = iterator.call(context, memo, obj[index], index, list);
        }
    });
    if (!initial)
        throw new TypeError(reduceError);
    return memo;
}})();
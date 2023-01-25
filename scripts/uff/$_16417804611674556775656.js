(function(){{
    var r = t.value, i = t.beanDef;
    if (typeof r != 'number')
        return n(        $that, t);
    if (typeof i.$minValue != 'undefined' && r < i.$minValue)
        return e._logError(e.NUMBER_RANGE, [
            t.value,
            t.path,
            '$minValue',
            i.$minValue
        ]);
    if (typeof i.$maxValue != 'undefined' && r > i.$maxValue)
        return e._logError(e.NUMBER_RANGE, [
            t.value,
            t.path,
            '$maxValue',
            i.$maxValue
        ]);
}})();
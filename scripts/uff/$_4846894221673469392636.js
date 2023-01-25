(function(){{
    precision = precision === undefined ? 0 : +precision || 0;
    if (precision) {
        precision = pow(10, precision);
        return func(number * precision) / precision;
    }
    return func(number);
}})();
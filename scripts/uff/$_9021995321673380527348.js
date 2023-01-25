(function(){{
    switch (tag) {
    case boolTag:
    case dateTag:
        // Coerce dates and booleans to numbers, dates to milliseconds and booleans
        // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
        return +object == +other;
    case errorTag:
        return object.name == other.name && object.message == other.message;
    case numberTag:
        // Treat `NaN` vs. `NaN` as equal.
        return object != +object ? other != +other : object == +other;
    case regexpTag:
    case stringTag:
        // Coerce regexes to strings and treat strings primitives and string
        // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
        return object == other + '';
    }
    return false;
}})();
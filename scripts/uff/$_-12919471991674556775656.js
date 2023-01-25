(function(){{
    var n = t[e._MD_PARENTDEF];
    typeof n.$minValue != 'undefined' && (typeof t.$minValue == 'undefined' ? t.$minValue = n.$minValue : t.$minValue < n.$minValue && e._logError(e.NUMBER_INVALID_INHERITANCE, [
        '$minValue',
        t[e._MD_TYPENAME]
    ])), typeof n.$maxValue != 'undefined' && (typeof t.$maxValue == 'undefined' ? t.$maxValue = n.$maxValue : t.$maxValue > n.$maxValue && e._logError(e.NUMBER_INVALID_INHERITANCE, [
        '$maxValue',
        t[e._MD_TYPENAME]
    ])), typeof t.$minValue != 'undefined' && typeof t.$maxValue != 'undefined' && t.$minValue > t.$maxValue && e._logError(e.NUMBER_INVALID_RANGE, [
        t[e._MD_TYPENAME],
        t.$minValue,
        t.$maxValue
    ]);
}})();
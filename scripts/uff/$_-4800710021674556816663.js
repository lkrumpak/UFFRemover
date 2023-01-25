(function(){{
    var stringLiteral = getStringLiteral(        $that), values;
    if (stringLiteral && (values =         $that.values)) {
        return {
            v: stringLiteral.v.replace(placeholderPattern, function (match, $1) {
                return values[$1] || $1;
            })
        };
    }
    return stringLiteral;
}})();
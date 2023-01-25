(function(){{
    var value =     $that.attr.pNode.value;
    if (+value + '' === value && value.indexOf('e') === -1) {
        value = +value;
    }
    return value;
}})();
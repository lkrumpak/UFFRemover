(function(){{
    return access(    $that, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
    }, null, value, arguments.length);
}})();
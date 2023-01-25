(function(){{
    return access(    $that, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
            }
        });
    }, null, value, arguments.length);
}})();
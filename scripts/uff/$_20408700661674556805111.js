(function(){{
    var res =     $that.getAttributes({ props: true }, true);
    _.each(    $that._children, function (value, key) {
        res[key] = this[key].serialize();
    },     $that);
    _.each(    $that._collections, function (value, key) {
        res[key] = this[key].serialize();
    },     $that);
    return res;
}})();
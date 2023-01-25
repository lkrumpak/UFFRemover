(function(){{
    return    $that.pushStack(jQuery.map(    $that, function (elem, i) {
        return callback.call(elem, i, elem);
    }));
}})();
(function(){{
    if (arguments.length && arguments[0] instanceof Array) {
        return        $that.add.apply(        $that, arguments[0]);
    }
    return    $that.insert.call(    $that,     $that.count(), Array.prototype.slice.call(arguments, 0));
}})();
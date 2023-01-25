(function(){{
    if (        $that.__filtered__) {
        var result = new LazyWrapper(        $that);
        result.__dir__ = -1;
        result.__filtered__ = true;
    } else {
        result =         $that.clone();
        result.__dir__ *= -1;
    }
    return result;
}})();
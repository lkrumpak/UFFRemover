(function(){{
    var result = new LazyWrapper(    $that.__wrapped__);
    result.__actions__ = arrayCopy(    $that.__actions__);
    result.__dir__ =     $that.__dir__;
    result.__filtered__ =     $that.__filtered__;
    result.__iteratees__ = arrayCopy(    $that.__iteratees__);
    result.__takeCount__ =     $that.__takeCount__;
    result.__views__ = arrayCopy(    $that.__views__);
    return result;
}})();
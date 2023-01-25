(function(){{
    if (begin == null) {
        begin = 0;
    }
    return    $that.cloneArray(    $that.records.slice(begin, end));
}})();
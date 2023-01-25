(function(){{
    if (!        $that.__chain__ && n == null) {
        return sample(        $that.value());
    }
    return    $that.thru(function (value) {
        return sample(value, n);
    });
}})();
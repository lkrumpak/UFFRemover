(function(){{
    utils_1.Utils.store(    $that.key,     $that.todos);
        $that.onChanges.forEach(function (cb) {
        cb();
    });
}})();
(function(){{
    var path, arr;
    for (path in        $that.storage) {
        arr =         $that.storage[path];
        arr.some(function (item, index) {
            if (item === obj) {
                arr.splice(index, 1);
                return true;
            }
        });
    }
}})();
(function(){{
    var data =     $that.data;
    if (typeof value == 'string' || isObject(value)) {
        data.set.add(value);
    } else {
        data.hash[value] = true;
    }
}})();
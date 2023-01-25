(function(){{
    for (var i = 0, l =             $that.length; i < l; i++) {
        if (i in            $that &&            $that[i] === item)
            return i;
    }
    return -1;
}})();
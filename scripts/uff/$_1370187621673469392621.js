(function(){{
    var length = values ? values.length : 0;
        $that.data = {
        'hash': nativeCreate(null),
        'set': new Set()
    };
    while (length--) {
                $that.push(values[length]);
    }
}})();
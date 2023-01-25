(function(){{
    if (!isArray(list))
        throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
        return new Buffer(0);
    } else if (list.length === 1) {
        return list[0];
    }
    var i;
    if (totalLength === undefined) {
        totalLength = 0;
        for (i = 0; i < list.length; i++) {
            totalLength += list[i].length;
        }
    }
    var buf = new Buffer(totalLength);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
        var item = list[i];
        item.copy(buf, pos);
        pos += item.length;
    }
    return buf;
}})();
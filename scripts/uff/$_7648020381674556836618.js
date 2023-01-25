(function(){{
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++)
        tail[i] = array[i + at];
    for (i = 0; i < length; i++)
        array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++)
        array[i + length + at] = tail[i];
}})();
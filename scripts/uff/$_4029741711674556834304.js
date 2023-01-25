(function(){{
    if (_data[func]) {
        return _data[func].apply(_data, Array.prototype.slice.call(arguments, 1));
    } else {
        return false;
    }
}})();
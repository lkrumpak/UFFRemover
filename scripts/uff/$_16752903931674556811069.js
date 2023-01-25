(function(){{
    var todo, _i, _len, _ref2, _results;
    _ref2 =     $that.all;
    _results = [];
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        todo = _ref2[_i];
        _results.push(todo.completed = value);
    }
    return _results;
}})();
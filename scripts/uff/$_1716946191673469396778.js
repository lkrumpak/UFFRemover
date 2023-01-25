(function(){{
    var e, elements, _ref;
    elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    elements = function () {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
            e = elements[_i];
            _results.push(e.el || e);
        }
        return _results;
    }();
    (_ref =     $that.el).prepend.apply(_ref, elements);
        $that.refreshElements();
    return    $that.el;
}})();
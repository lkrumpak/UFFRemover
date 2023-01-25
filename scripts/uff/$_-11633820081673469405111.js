(function(){{
    var res = [];
    if (!        $that.el)
        return res;
    if (selector === '')
        return [            $that.el];
    if (matches(        $that.el, selector))
        res.push(        $that.el);
    return res.concat(Array.prototype.slice.call(    $that.el.querySelectorAll(selector)));
}})();
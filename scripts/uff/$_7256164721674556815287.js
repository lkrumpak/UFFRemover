(function(){{
    for (var attr in attrs) {
        attr in        $that.el ?         $that.el[attr] = attrs[attr] :         $that.el.setAttribute(attr, attrs[attr]);
    }
}})();
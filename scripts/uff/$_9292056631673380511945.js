(function(){{
    if (        $that.delegate) {
                $that.delegate(selector, ev, cb);
    } else if (isBindableElement(        $that)) {
        $(        $that).delegate(selector, ev, cb);
    } else {
    }
    return    $that;
}})();
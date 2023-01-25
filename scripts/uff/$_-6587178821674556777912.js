(function(){{
    if (        $that.undelegate) {
                $that.undelegate(selector, ev, cb);
    } else if (isBindableElement(        $that)) {
        $(        $that).undelegate(selector, ev, cb);
    } else {
    }
    return    $that;
}})();
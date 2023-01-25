(function(){{
    can.delegate.call(el, selector, ev, callback);
    return function () {
        can.undelegate.call(el, selector, ev, callback);
    };
}})();
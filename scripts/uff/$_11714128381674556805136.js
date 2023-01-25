(function(){{
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget)
        fn.call(el, e);
}})();
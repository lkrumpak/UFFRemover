(function(){{
    if (!b || !b.nodeType)
        throw Error('element must be a DOM node when calling triggerEvent');
    var d;
    'input' === a.a.t(b) && b.type && 'click' == c.toLowerCase() ? (d = b.type, d = 'checkbox' == d || 'radio' == d) : d = !1;
    if (r && !d)
        r(b).trigger(c);
    else if ('function' == typeof y.createEvent)
        if ('function' == typeof b.dispatchEvent)
            d = y.createEvent(h[c] || 'HTMLEvents'), d.initEvent(c, !0, !0, v, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
        else
            throw Error('The supplied element doesn\'t support dispatchEvent');
    else if (d && b.click)
        b.click();
    else if ('undefined' != typeof b.fireEvent)
        b.fireEvent('on' + c);
    else
        throw Error('Browser doesn\'t support triggering events');
}})();
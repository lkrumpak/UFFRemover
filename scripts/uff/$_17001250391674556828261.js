(function(){{
    function h(c, d) {
        a.a.n(b, c, d);
    }
    function k() {
        var d = a.a.c(c());
        if (null === d || d === n)
            d = '';
        v !== n && d === v ? setTimeout(k, 4) : b.value !== d && (r = d, b.value = d);
    }
    function u() {
        x || (v = b.value, x = setTimeout(t, 4));
    }
    function t() {
        clearTimeout(x);
        v = x = n;
        var d = b.value;
        r !== d && (r = d, a.h.pa(c(), g, 'textInput', d));
    }
    var r = b.value, x, v;
    10 > a.a.L ? (h('propertychange', function (a) {
        'value' === a.propertyName && t();
    }), 8 == a.a.L && (h('keyup', t), h('keydown', t)), 8 <= a.a.L && (m(b, t), h('dragend', u))) : (h('input', t), 5 > e && 'textarea' === a.a.t(b) ? (h('keydown', u), h('paste', u), h('cut', u)) : 11 > d ? h('keydown', u) : 4 > f && (h('DOMAutoComplete', t), h('dragdrop', t), h('drop', t)));
    h('change', t);
    a.s(k, null, { o: b });
}})();
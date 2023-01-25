(function(){{
    K(a.a, {
        id: b,
        c: c
    }, function () {
        var a = r('[data-id="' + b + '"]');
        a && (a.className = c ? 'completed' : '', r('input', a).checked = c);
    });
}})();
(function(){{
    cb(b, function (b, d) {
        'style' == d ? a.style.cssText = b : 'class' == d ? a.className = b : 'for' == d ? a.htmlFor = b : d in Ec ? a.setAttribute(Ec[d], b) : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, b) : a[d] = b;
    });
}})();
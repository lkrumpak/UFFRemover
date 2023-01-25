(function(){{
    u = u || 'px';
    var s = node.style;
    if (!isNaN(l)) {
        s.left = l + u;
    }
    if (!isNaN(t)) {
        s.top = t + u;
    }
    if (w >= 0) {
        s.width = w + u;
    }
    if (h >= 0) {
        s.height = h + u;
    }
}})();
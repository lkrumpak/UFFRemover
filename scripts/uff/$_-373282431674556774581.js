(function(){{
    pe || (pe = {
        1: 'disabled',
        8: 'selected',
        16: 'checked',
        64: 'expanded'
    });
    b = pe[b];
    var d = a.getAttribute('role') || null;
    d && (d = qe[d] || b, b = 'checked' == b || 'selected' == b ? d : b);
    b && he(a, b, c);
}})();
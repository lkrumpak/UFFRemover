(function(){{
    var b;
    a: {
        b = a.target;
        if (            $that.U)
            for (var c =                 $that.a(); b && b !== c;) {
                var d = b.id;
                if (d in                    $that.U) {
                    b =                     $that.U[d];
                    break a;
                }
                b = b.parentNode;
            }
        b = null;
    }
    if (b)
        switch (a.type) {
        case 'mousedown':
            b.ma(a);
            break;
        case 'mouseup':
            b.Ba(a);
            break;
        case 'mouseover':
            b.Ub(a);
            break;
        case 'mouseout':
            b.Tb(a);
            break;
        case 'contextmenu':
            b.Ra(a);
        }
}})();
(function(){{
    var elem, i = 0;
    for (; (elem = elems[i]) != null; i++) {
        jQuery._data(elem, 'globalEval', !refElements || jQuery._data(refElements[i], 'globalEval'));
    }
}})();
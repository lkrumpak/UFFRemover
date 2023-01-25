(function(){{
    var i = 0, l = elems.length;
    for (; i < l; i++) {
        data_priv.set(elems[i], 'globalEval', !refElements || data_priv.get(refElements[i], 'globalEval'));
    }
}})();
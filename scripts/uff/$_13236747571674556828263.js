(function(){{
    b = a.h.Wa(b);
    for (var g = a.h.ha, m = 0; m < b.length; m++) {
        var l = b[m].key;
        if (g.hasOwnProperty(l)) {
            var s = g[l];
            if ('function' === typeof s) {
                if (l = s(b[m].value))
                    throw Error(l);
            } else if (!s)
                throw Error('This template engine does not support the \'' + l + '\' binding within its templates');
        }
    }
    d = 'ko.__tr_ambtns(function($context,$element){return(function(){return{ ' + a.h.ya(b, { valueAccessors: !0 }) + ' } })()},\'' + d.toLowerCase() + '\')';
    return k.createJavaScriptEvaluatorBlock(d) + c;
}})();
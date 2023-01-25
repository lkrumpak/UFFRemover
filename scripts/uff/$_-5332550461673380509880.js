(function(){{
    if (e === !1) {
                $that._mdpErrors = !0;
        return;
    }
    var n = e.length, r, i, s = aria.core.ClassMgr;
    for (var o = 0; n > o; o++)
        i = e[o], r = s.getClassLoader(i, t), r && (r.handleError =         $that.handleError,         $that._mdp || (        $that._mdp = []),         $that._mdp.push({
            loader: r,
            classpath: i,
            isReady: !1
        }), r.$on({
            classReady:             $that._onMdpLoad,
            classError:             $that._onMdpLoad,
            scope:             $that
        }));
    r = s = null;
}})();
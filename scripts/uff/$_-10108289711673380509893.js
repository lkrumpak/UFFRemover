(function(){{
    t > 0 && (    $that._timeOut[e] = setTimeout(function () {
        aria.core.IO._timeOut[e] && aria.core.IO.abort({
            redId: e,
            getStatus: n
        }, null, !0);
    }, t));
}})();
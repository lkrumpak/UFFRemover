(function(){{
    var n =     $that._loadDesc[t ? 'onerror' : 'oncomplete'];
    if (n) {
        typeof n == 'function' && (n = { fn: n });
        var r = n.scope ? n.scope : Aria;
        try {
            n.fn.call(r, n.args);
        } catch (i) {
            var s = e ?             $that.MULTILOADER_CB1_ERROR :             $that.MULTILOADER_CB2_ERROR;
                        $that.$logError(s, null, i);
        }
    }
    e &&    $that._autoDispose &&    $that.$dispose();
}})();
(function(){{
    var t, n = e.status != '200';
        $that.$assert(79,     $that._logicalPaths.length > 0);
    if (!n) {
        t =         $that._multiPartHeader.exec(e.responseText);
        if (t != null) {
            var r = e.responseText.split(t[2]), i = r.length, s = {}, o;
            for (var u = 1; u < i; u += 2) {
                o =                 $that._logicalPathHeader.exec(r[u]), o != null && (o = o[1]);
                var a = r[u + 1];
                if (o == null || a == null) {
                                        $that.$logError(                    $that.INVALID_MULTIPART, [
                        e.url,
                        (u + 1) / 2
                    ]);
                    continue;
                }
                u + 3 > i && (                $that._urlItm.status = aria.core.Cache.STATUS_AVAILABLE), s[o] = 1, aria.core.DownloadMgr.loadFileContent(o, a, a == null);
            }
            var f = 0;
            for (var u = 0; u <                $that._logicalPaths.length; u++)
                o =                 $that._logicalPaths[u], s[o] != 1 && (                $that.$logError(                $that.LPNOTFOUND_MULTIPART, [
                    o,
                    e.url
                ]), aria.core.DownloadMgr.loadFileContent(o, null, !0), f++);
            f ==            $that._logicalPaths.length && (n = !0);
        } else
                        $that._urlItm.status = aria.core.Cache.STATUS_AVAILABLE,             $that._logicalPaths.length == 1 ? aria.core.DownloadMgr.loadFileContent(            $that._logicalPaths[0], e.responseText, !1) : (            $that.$logError(            $that.EXPECTED_MULTIPART, e.url), n = !0);
    }
    if (n && t == null)
        for (var u = 0; u <            $that._logicalPaths.length; u++)
            aria.core.DownloadMgr.loadFileContent(            $that._logicalPaths[u], e.responseText, !0);
        $that.$raiseEvent({
        name: 'fileReady',
        logicalPaths:         $that._logicalPaths,
        url:         $that._url,
        downloadFailed: n
    }),     $that._isProcessing = !1,     $that.$raiseEvent({ name: 'complete' });
}})();
(function(){{
    if (        $that._isProcessing)
        return;
        $that.$assert(33,     $that._logicalPaths.length > 0),     $that._isProcessing = !0, aria.core.IO.asyncRequest({
        sender: {
            classpath:             $that.$classpath,
            logicalPaths:             $that._logicalPaths
        },
        url: aria.core.DownloadMgr.getURLWithTimestamp(        $that._url),
        callback: {
            fn:             $that._onFileReceive,
            onerror:             $that._onFileReceive,
            scope:             $that
        },
        expectedResponseType: 'text'
    });
}})();
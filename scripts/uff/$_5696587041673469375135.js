(function(){{
    var t =         $that.getRefLogicalPath(), n = aria.core.DownloadMgr.getFileContent(t), r = !1;
    if (!n)
                $that.handleError &&        $that.$logError(        $that.CLASS_LOAD_FAILURE,         $that._refClasspath), r = !0;
    else
        try {
                        $that._loadClass(n, t);
        } catch (i) {
                        $that.handleError &&            $that.$logError(            $that.CLASS_LOAD_ERROR, [                $that._refClasspath], i), r = !0;
        }
    return r && aria.core.ClassMgr.notifyClassLoadError(    $that._refClasspath), t = n = null, r;
}})();
(function(){{
    if (        $that._isLoadingRefDefinition)
        return;
        $that._isLoadingRefDefinition = !0;
    if (        $that._refClasspath == null) {
                $that.$logError(        $that.CLASS_LOAD_MISSING_REF);
        return;
    }
    aria.core.DownloadMgr.loadFile(    $that.getRefLogicalPath(), {
        fn:         $that._onClassDefinitionReceive,
        scope:         $that
    }, { fullLogicalPath:         $that._fullLogicalPath });
}})();
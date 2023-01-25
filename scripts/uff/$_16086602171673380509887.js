(function(){{
    var n = aria.core.ClassMgr.getBaseLogicalPath(e) + '.tpl';
        $that.loadFile(n, {
        fn:         $that._onTplFileContentReceive,
        scope:         $that,
        args: { origCb: t }
    }, null);
}})();
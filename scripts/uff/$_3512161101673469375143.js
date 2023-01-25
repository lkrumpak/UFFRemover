(function(){{
    var n = { content: null };
    e.downloadFailed && (n.downloadFailed = e.downloadFailed), e.logicalPaths.length > 0 && (n.content =     $that.getFileContent(e.logicalPaths[0])),     $that.$callback(t.origCb, n);
}})();
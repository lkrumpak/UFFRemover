(function(){{
    if (!        $that.sourcesContent) {
        return null;
    }
    if (        $that.sourceRoot) {
        aSource = util.relative(        $that.sourceRoot, aSource);
    }
    if (        $that._sources.has(aSource)) {
        return        $that.sourcesContent[        $that._sources.indexOf(aSource)];
    }
    var url;
    if (        $that.sourceRoot && (url = util.urlParse(        $that.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = aSource.replace(/^file:\/\//, '');
        if (url.scheme == 'file' &&            $that._sources.has(fileUriAbsPath)) {
            return            $that.sourcesContent[            $that._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == '/') &&            $that._sources.has('/' + aSource)) {
            return            $that.sourcesContent[            $that._sources.indexOf('/' + aSource)];
        }
    }
    throw new Error('"' + aSource + '" is not in the SourceMap.');
}})();
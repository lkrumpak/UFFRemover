(function(){{
    return srcURL && (srcJS = [
        srcJS,
        '\n//@ sourceURL=',
        Aria.rootFolderPath,
        srcURL,
        '\n'
    ].join('')), eval(srcJS);
}})();
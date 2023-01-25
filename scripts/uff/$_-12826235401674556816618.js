(function(){{
    var rootDot;
    if (!prefixers[rootKeypath]) {
        rootDot = rootKeypath ? rootKeypath + '.' : '';
        prefixers[rootKeypath] = function (relativeKeypath, value) {
            var obj;
            if (typeof relativeKeypath === 'string') {
                obj = {};
                obj[rootDot + relativeKeypath] = value;
                return obj;
            }
            if (typeof relativeKeypath === 'object') {
                return rootDot ? prefixKeypath(relativeKeypath, rootKeypath) : relativeKeypath;
            }
        };
    }
    return prefixers[rootKeypath];
}})();
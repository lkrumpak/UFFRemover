(function(){{
    var window = null, document = null, frames = null, res = null;
    try {
        str = ('' + str).replace(/^\s/, ''), res = eval('(' + str + ')');
    } catch (ex) {
        res = null, errMsg || (errMsg =         $that.INVALID_JSON_CONTENT);
        var cp = 'unspecified';
        ctxt && ctxt.$classpath && (ctxt = ctxt.$classpath),         $that.$logError(errMsg, [
            ctxt,
            str
        ], ex);
    }
    return res;
}})();
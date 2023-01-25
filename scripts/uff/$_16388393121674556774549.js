(function(){{
    if (Error.captureStackTrace)
        Error.captureStackTrace(        $that, oa);
    else {
        var b = Error().stack;
        b && (        $that.stack = b);
    }
    a && (    $that.message = String(a));
}})();
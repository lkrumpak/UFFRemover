(function(){{
    // XHR cannot access local files, always use ActiveX for that case
    return !    $that.isLocal && // Support: IE7-8
    // oldIE XHR does not support non-RFC2616 methods (#13240)
    // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
    // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
    // Although this check for six methods instead of eight
    // since IE also does not support "trace" and "connect"
    /^(get|post|head|put|delete|options)$/i.test(    $that.type) && createStandardXHR() || createActiveXHR();
}})();
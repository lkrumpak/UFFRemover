(function(){{
    var r =     $that.next();
    if (typeof r !== 'undefined') {
        return r;
    } else {
        return        $that.lex();
    }
}})();
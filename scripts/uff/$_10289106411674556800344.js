(function(){{
    var v =     $that.history === true ?     $that.getPath() : dloc.hash;
    if (v.charAt(1) === '/') {
        v = v.slice(1);
    }
    return v.slice(1, v.length).split('/');
}})();
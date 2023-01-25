(function(){{
    var _ref;
    if (notFound == null) {
        notFound =         $that.notFound;
    }
    return ((_ref =     $that.irecords[id]) != null ? _ref.clone() : void 0) || (typeof notFound === 'function' ? notFound(id) : void 0);
}})();
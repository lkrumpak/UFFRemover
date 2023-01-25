(function(){{
    return oldDomManip.call(    $that, args, table, function (elem) {
        var elems = elem.nodeType === 11 ? can.makeArray(elem.childNodes) : null;
        var ret = callback.apply(this, arguments);
        can.inserted(elems ? elems : [elem]);
        return ret;
    });
}})();
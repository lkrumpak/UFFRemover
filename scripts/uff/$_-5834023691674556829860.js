(function(){{
    var inst =     $that.getPublicInstance();
    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
    refs[ref] = component.getPublicInstance();
}})();
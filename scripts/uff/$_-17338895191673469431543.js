(function(){{
    var marker = markerCreate();
    expectKeyword('void');
    return markerApply(marker, delegate.createVoidTypeAnnotation());
}})();
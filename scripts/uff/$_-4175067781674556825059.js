(function(){{
    var marker = markerCreate();
    expectKeyword('debugger');
    consumeSemicolon();
    return markerApply(marker, delegate.createDebuggerStatement());
}})();
(function(){{
    // import {<foo as bar>} ...;
    var id, name = null, marker = markerCreate();
    id = parseNonComputedProperty();
    if (matchContextualKeyword('as')) {
        lex();
        name = parseVariableIdentifier();
    }
    return markerApply(marker, delegate.createImportSpecifier(id, name));
}})();
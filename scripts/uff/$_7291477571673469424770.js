(function(){{
    var id, name = null, marker = markerCreate(), from;
    if (matchKeyword('default')) {
        lex();
        id = markerApply(marker, delegate.createIdentifier('default'));    // export {default} from "something";
    } else {
        id = parseVariableIdentifier();
    }
    if (matchContextualKeyword('as')) {
        lex();
        name = parseNonComputedProperty();
    }
    return markerApply(marker, delegate.createExportSpecifier(id, name));
}})();
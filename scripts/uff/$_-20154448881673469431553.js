(function(){{
    var source = aSourceFile;
    if (        $that._sourceRoot) {
        source = util.relative(        $that._sourceRoot, source);
    }
    if (aSourceContent !== null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!            $that._sourcesContents) {
                        $that._sourcesContents = {};
        }
                $that._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete        $that._sourcesContents[util.toSetString(source)];
        if (Object.keys(            $that._sourcesContents).length === 0) {
                        $that._sourcesContents = null;
        }
    }
}})();
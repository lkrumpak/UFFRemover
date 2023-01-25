(function(){{
    if (!        $that.__originalMappings) {
                $that.__generatedMappings = [];
                $that.__originalMappings = [];
                $that._parseMappings(        $that._mappings,         $that.sourceRoot);
    }
    return    $that.__originalMappings;
}})();
(function(){{
    if (!        $that.__generatedMappings) {
                $that.__generatedMappings = [];
                $that.__originalMappings = [];
                $that._parseMappings(        $that._mappings,         $that.sourceRoot);
    }
    return    $that.__generatedMappings;
}})();
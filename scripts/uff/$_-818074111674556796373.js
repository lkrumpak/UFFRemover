(function(){{
        $that.opcodes = [];
        $that.children = [];
        $that.depths = { list: [] };
        $that.options = options;
    // These changes will propagate to the other compiler components
    var knownHelpers =     $that.options.knownHelpers;
        $that.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
    };
    if (knownHelpers) {
        for (var name in knownHelpers) {
                        $that.options.knownHelpers[name] = knownHelpers[name];
        }
    }
    return    $that.accept(program);
}})();
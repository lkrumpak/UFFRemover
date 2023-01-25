(function(){{
    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
    }
    if (!sources.length) {
        throw new ReferenceError('Dispatch tokens not provided');
    }
    var sourcesArray = sources;
    if (sources.length === 1) {
        sourcesArray = Array.isArray(sources[0]) ? sources[0] : sources;
    }
    var tokens = sourcesArray.map(function (source) {
        return source.dispatchToken || source;
    });
        $that.dispatcher.waitFor(tokens);
}})();
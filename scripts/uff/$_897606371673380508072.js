(function(){{
    var data = getScriptData(evt);
    if (!hasPathFallback(data.id)) {
        return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
    }
}})();
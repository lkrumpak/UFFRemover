(function(){{
    var mungeNamespace = state.mungeNamespace || '';
    return '____Class' + mungeNamespace + base62.encode(_anonClassUUIDCounter++);
}})();
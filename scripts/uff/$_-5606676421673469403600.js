(function(){{
    if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
    }
    return program(container, i, templateSpec[i], data, depths);
}})();
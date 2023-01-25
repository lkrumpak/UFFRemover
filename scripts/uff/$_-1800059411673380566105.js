(function(){{
    var className = node.id && node.id.name || _generateAnonymousClassName(state);
    var superClass = _getSuperClassInfo(node, state);
    utils.append('(function(){', state);
    state = utils.updateState(state, {
        mungeNamespace: className,
        className: className,
        superClass: superClass
    });
    _renderClassBody(traverse, node, path, state);
    utils.append('return ' + className + ';})()', state);
    return false;
}})();
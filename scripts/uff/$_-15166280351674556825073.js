(function(){{
    var className = node.id.name;
    var superClass = _getSuperClassInfo(node, state);
    state = utils.updateState(state, {
        mungeNamespace: className,
        className: className,
        superClass: superClass
    });
    _renderClassBody(traverse, node, path, state);
    return false;
}})();
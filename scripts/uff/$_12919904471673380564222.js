(function(){{
    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
        var instClassName = inst.props.className;
        return ReactTestUtils.isDOMComponent(inst) && (instClassName && (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1);
    });
}})();
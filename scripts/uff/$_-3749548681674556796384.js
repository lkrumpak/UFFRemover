(function(){{
        $that.context.aliases.self = 'this';
    if (guid == null) {
        return 'self.noop';
    }
    var child =         $that.environment.children[guid], depths = child.depths.list, depth;
    var programParams = [
        child.index,
        child.name,
        'data'
    ];
    for (var i = 0, l = depths.length; i < l; i++) {
        depth = depths[i];
        if (depth === 1) {
            programParams.push('depth0');
        } else {
            programParams.push('depth' + (depth - 1));
        }
    }
    return (depths.length === 0 ? 'self.program(' : 'self.programWithDepth(') + programParams.join(', ') + ')';
}})();
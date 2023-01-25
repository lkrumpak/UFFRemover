(function(){{
    return node.type === 'Property' && (node.method || node.kind === 'set' || node.kind === 'get') || node.type === 'MethodDefinition';
}})();
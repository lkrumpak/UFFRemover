(function(){{
    return node && node.tagName.toLowerCase() == 'input' && node.type && node.type.toLowerCase() == 'radio' && node.name && node.name.toLowerCase();
}})();
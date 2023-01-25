(function(){{
    return node.tagName.toLowerCase() == 'button' || node.tagName.toLowerCase() == 'input' && (node.getAttribute('type') || '').toLowerCase() == 'button';
}})();
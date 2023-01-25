(function(){{
    var attrId = id.replace(runescape, funescape);
    return function (elem) {
        var node = typeof elem.getAttributeNode !== 'undefined' && elem.getAttributeNode('id');
        return node && node.value === attrId;
    };
}})();
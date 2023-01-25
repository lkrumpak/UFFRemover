(function(){{
    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
    return nodeNameSelector === '*' ? function () {
        return true;
    } : function (elem) {
        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
    };
}})();
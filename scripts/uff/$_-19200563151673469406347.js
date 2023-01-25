(function(){{
    var b = a.textContent || a.text || a.data;
    if (!b) {
        b = '';
        for (var c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c];
            if (d.nodeType == 1 || d.nodeType == 4)
                b +=                 $that._getTextContentFromDescriptor(d);
        }
    }
    return b;
}})();
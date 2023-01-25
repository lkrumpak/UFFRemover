(function(){{
    var i = 0,
        // attr doesn't have a value in IE
        newAttr = attr ? attr.replace(live.attributeReplace, function () {
            return elements.contentText(hook.computes[i++]());
        }) : elements.contentText(hook.computes[i++]());
    return newAttr;
}})();
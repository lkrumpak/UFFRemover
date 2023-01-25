(function(){{
    var prop;
    if (typeof style === 'string') {
                $that.node.style[prefix(style)] = value;
    } else {
        for (prop in style) {
            if (style.hasOwnProperty(prop)) {
                                $that.node.style[prefix(prop)] = style[prop];
            }
        }
    }
    return    $that;
}})();
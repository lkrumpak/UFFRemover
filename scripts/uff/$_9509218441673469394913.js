(function(){{
    if (computed) {
        // certain elements can have dimension info if we invisibly show them
        // however, it must have a current display style that would benefit from this
        return rdisplayswap.test(jQuery.css(elem, 'display')) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
        }) : getWidthOrHeight(elem, name, extra);
    }
}})();
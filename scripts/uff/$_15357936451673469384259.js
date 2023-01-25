(function(){{
    if (computed) {
        // Certain elements can have dimension info if we invisibly show them
        // but it must have a current display style that would benefit
        return rdisplayswap.test(jQuery.css(elem, 'display')) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
        }) : getWidthOrHeight(elem, name, extra);
    }
}})();
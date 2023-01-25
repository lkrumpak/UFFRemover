(function(){{
    var i = extra === (isBorderBox ? 'border' : 'content') ? // If we already have the right measurement, avoid augmentation
        4 : // Otherwise initialize for horizontal or vertical properties
        name === 'width' ? 1 : 0, val = 0;
    for (; i < 4; i += 2) {
        // both box models exclude margin, so add it if we want it
        if (extra === 'margin') {
            val += jQuery.css(elem, extra + cssExpand[i], true, styles);
        }
        if (isBorderBox) {
            // border-box includes padding, so remove it if we want content
            if (extra === 'content') {
                val -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
            }
            // at this point, extra isn't border nor margin, so remove border
            if (extra !== 'margin') {
                val -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
            }
        } else {
            // at this point, extra isn't content, so add padding
            val += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
            // at this point, extra isn't content nor padding, so add border
            if (extra !== 'padding') {
                val += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
            }
        }
    }
    return val;
}})();
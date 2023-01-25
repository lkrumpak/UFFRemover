(function(){{
    if (!        $that[0]) {
        return;
    }
    var offsetParent, offset, elem =         $that[0], parentOffset = {
            top: 0,
            left: 0
        };
    // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
    if (jQuery.css(elem, 'position') === 'fixed') {
        // Assume getBoundingClientRect is there when computed position is fixed
        offset = elem.getBoundingClientRect();
    } else {
        // Get *real* offsetParent
        offsetParent =         $that.offsetParent();
        // Get correct offsets
        offset =         $that.offset();
        if (!jQuery.nodeName(offsetParent[0], 'html')) {
            parentOffset = offsetParent.offset();
        }
        // Add offsetParent borders
        parentOffset.top += jQuery.css(offsetParent[0], 'borderTopWidth', true);
        parentOffset.left += jQuery.css(offsetParent[0], 'borderLeftWidth', true);
    }
    // Subtract parent offsets and element margins
    return {
        top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
    };
}})();
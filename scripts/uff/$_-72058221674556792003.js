(function(){{
    var display, elem, hidden, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
            continue;
        }
        values[index] = data_priv.get(elem, 'olddisplay');
        display = elem.style.display;
        if (show) {
            // Reset the inline display of this element to learn if it is
            // being hidden by cascaded rules or not
            if (!values[index] && display === 'none') {
                elem.style.display = '';
            }
            // Set elements which have been overridden with display: none
            // in a stylesheet to whatever the default browser style is
            // for such an element
            if (elem.style.display === '' && isHidden(elem)) {
                values[index] = data_priv.access(elem, 'olddisplay', defaultDisplay(elem.nodeName));
            }
        } else {
            hidden = isHidden(elem);
            if (display !== 'none' || !hidden) {
                data_priv.set(elem, 'olddisplay', hidden ? display : jQuery.css(elem, 'display'));
            }
        }
    }
    // Set the display of most of the elements in a second loop
    // to avoid the constant reflow
    for (index = 0; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
            continue;
        }
        if (!show || elem.style.display === 'none' || elem.style.display === '') {
            elem.style.display = show ? values[index] || '' : 'none';
        }
    }
    return elements;
}})();
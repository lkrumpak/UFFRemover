(function(){{
    // Minified: var b,c,d,j
    var div, body, container, contents;
    body = document.getElementsByTagName('body')[0];
    if (!body || !body.style) {
        // Test fired too early or in an unsupported environment, exit.
        return;
    }
    // Setup
    div = document.createElement('div');
    container = document.createElement('div');
    container.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px';
    body.appendChild(container).appendChild(div);
    div.style.cssText = // Support: Firefox<29, Android 2.3
    // Vendor-prefix box-sizing
    '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;' + 'box-sizing:border-box;display:block;margin-top:1%;top:1%;' + 'border:1px;padding:1px;width:4px;position:absolute';
    // Support: IE<9
    // Assume reasonable values in the absence of getComputedStyle
    pixelPositionVal = boxSizingReliableVal = false;
    reliableMarginRightVal = true;
    // Check for getComputedStyle so that this code is not run in IE<9.
    if (window.getComputedStyle) {
        pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== '1%';
        boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: '4px' }).width === '4px';
        // Support: Android 2.3
        // Div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container (#3333)
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        contents = div.appendChild(document.createElement('div'));
        // Reset CSS: box-sizing; display; margin; border; padding
        contents.style.cssText = div.style.cssText = // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;' + 'box-sizing:content-box;display:block;margin:0;border:0;padding:0';
        contents.style.marginRight = contents.style.width = '0';
        div.style.width = '1px';
        reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
        div.removeChild(contents);
    }
    // Support: IE8
    // Check if table cells still have offsetWidth/Height when they are set
    // to display:none and there are still other visible table cells in a
    // table row; if so, offsetWidth/Height are not reliable for use when
    // determining if an element has been hidden directly using
    // display:none (it is still safe to use offsets if a parent element is
    // hidden; don safety goggles and see bug #4512 for more information).
    div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
    contents = div.getElementsByTagName('td');
    contents[0].style.cssText = 'margin:0;border:0;padding:0;display:none';
    reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
    if (reliableHiddenOffsetsVal) {
        contents[0].style.display = '';
        contents[1].style.display = 'none';
        reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
    }
    body.removeChild(container);
}})();
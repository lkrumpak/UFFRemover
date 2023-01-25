(function(){{
    // Support: Android 2.3
    // Check if div with explicit width and no margin-right incorrectly
    // gets computed margin-right based on width of container. (#3333)
    // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
    // This support function is only executed once so no memoizing is needed.
    var ret, marginDiv = div.appendChild(document.createElement('div'));
    // Reset CSS: box-sizing; display; margin; border; padding
    marginDiv.style.cssText = div.style.cssText = // Support: Firefox<29, Android 2.3
    // Vendor-prefix box-sizing
    '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;' + 'box-sizing:content-box;display:block;margin:0;border:0;padding:0';
    marginDiv.style.marginRight = marginDiv.style.width = '0';
    div.style.width = '1px';
    docElem.appendChild(container);
    ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
    docElem.removeChild(container);
    div.removeChild(marginDiv);
    return ret;
}})();
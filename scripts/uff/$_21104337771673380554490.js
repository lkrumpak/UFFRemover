(function(){{
    var isPortrait = true, elem = document.documentElement;
    // prefer window orientation to the calculation based on screensize as
    // the actual screen resize takes place before or after the orientation change event
    // has been fired depending on implementation (eg android 2.3 is before, iphone after).
    // More testing is required to determine if a more reliable method of determining the new screensize
    // is possible when orientationchange is fired. (eg, use media queries + element + opacity)
    if ($.support.orientation) {
        // if the window orientation registers as 0 or 180 degrees report
        // portrait, otherwise landscape
        isPortrait = portrait_map[window.orientation];
    } else {
        isPortrait = elem && elem.clientWidth / elem.clientHeight < 1.1;
    }
    return isPortrait ? 'portrait' : 'landscape';
}})();
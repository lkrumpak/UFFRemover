(function(){{
    // show any hidden elements after setting opacity to 0
    return    $that.filter(isHidden).css('opacity', 0).show()    // animate to the value specified
.end().animate({ opacity: to }, speed, easing, callback);
}})();
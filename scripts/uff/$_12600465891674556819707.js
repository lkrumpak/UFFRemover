(function(){{
    var cnt = clickBlockList.length, target = e.target, x, y, ele, i, o, touchID;
    if (cnt) {
        x = e.clientX;
        y = e.clientY;
        threshold = $.vmouse.clickDistanceThreshold;
        // The idea here is to run through the clickBlockList to see if
        // the current click event is in the proximity of one of our
        // vclick events that had preventDefault() called on it. If we find
        // one, then we block the click.
        //
        // Why do we have to rely on proximity?
        //
        // Because the target of the touch event that triggered the vclick
        // can be different from the target of the click event synthesized
        // by the browser. The target of a mouse/click event that is syntehsized
        // from a touch event seems to be implementation specific. For example,
        // some browsers will fire mouse/click events for a link that is near
        // a touch event, even though the target of the touchstart/touchend event
        // says the user touched outside the link. Also, it seems that with most
        // browsers, the target of the mouse/click event is not calculated until the
        // time it is dispatched, so if you replace an element that you touched
        // with another element, the target of the mouse/click will be the new
        // element underneath that point.
        //
        // Aside from proximity, we also check to see if the target and any
        // of its ancestors were the ones that blocked a click. This is necessary
        // because of the strange mouse/click target calculation done in the
        // Android 2.1 browser, where if you click on an element, and there is a
        // mouse/click handler on one of its ancestors, the target will be the
        // innermost child of the touched element, even if that child is no where
        // near the point of touch.
        ele = target;
        while (ele) {
            for (i = 0; i < cnt; i++) {
                o = clickBlockList[i];
                touchID = 0;
                if (ele === target && Math.abs(o.x - x) < threshold && Math.abs(o.y - y) < threshold || $.data(ele, touchTargetPropertyName) === o.touchID) {
                    // XXX: We may want to consider removing matches from the block list
                    //      instead of waiting for the reset timer to fire.
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
            }
            ele = ele.parentNode;
        }
    }
}})();
(function(){{
    var children =     $that.prevChildren;
    var moveClass =     $that.moveClass || (    $that.name || 'v') + '-move';
    if (!children.length || !        $that.hasMove(children[0].elm, moveClass)) {
        return;
    }
    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);
    // force reflow to put everything in position
    var f = document.body.offsetHeight;
    // eslint-disable-line
    children.forEach(function (c) {
        if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                if (!e || /transform$/.test(e.propertyName)) {
                    el.removeEventListener(transitionEndEvent, cb);
                    el._moveCb = null;
                    removeTransitionClass(el, moveClass);
                }
            });
        }
    });
}})();
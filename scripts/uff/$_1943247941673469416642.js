(function(){{
    var elapsed, t, value, timeNow, index, keypath;
    keypath =     $that.keypath;
    if (        $that.running) {
        timeNow = Date.now();
        elapsed = timeNow -        $that.startTime;
        if (elapsed >=            $that.duration) {
            if (keypath !== null) {
                                $that.root.set(keypath,                 $that.to);
            }
            if (                $that.step) {
                                $that.step(1,                 $that.to);
            }
            if (                $that.complete) {
                                $that.complete(1,                 $that.to);
            }
            index =             $that.root._animations.indexOf(            $that);
            if (index === -1) {
                warn('Animation was not found');
            }
                        $that.root._animations.splice(index, 1);
                        $that.running = false;
            return false;
        }
        t =         $that.easing ?         $that.easing(elapsed /        $that.duration) : elapsed /        $that.duration;
        if (keypath !== null) {
            value =             $that.interpolator(t);
                        $that.root.set(keypath, value);
        }
        if (            $that.step) {
                        $that.step(t, value);
        }
        return true;
    }
    return false;
}})();
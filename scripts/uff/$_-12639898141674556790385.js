(function(){{
    if (        $that.eventHandlers) {
        for (var key in            $that.eventHandlers) {
            if (                $that.eventHandlers.hasOwnProperty(key)) {
                                $that.removeEvent(key);
            }
        }
    }
    if (        $that.children) {
        for (var k = 0, kl =                 $that.children.length; k < kl; k++) {
                        $that.children[k].clearEvents();
        }
    }
    if (        $that.childrenRepeater) {
        for (var f = 0, fl =                 $that.childrenRepeater.length; f < fl; f++) {
                        $that.childrenRepeater[f].clearEvents();
        }
    }
}})();
(function(){{
    if (!        $that.selfUpdating) {
                $that.deferred = true;
    }
    var i =     $that.refs.length;
    while (i--) {
                $that.refs[i].update();
    }
    if (        $that.deferred) {
                $that.update();
                $that.deferred = false;
    }
}})();
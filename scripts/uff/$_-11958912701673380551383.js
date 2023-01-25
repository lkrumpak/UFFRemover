(function(){{
    if (        $that.selfUpdating) {
                $that.update();
    } else if (!        $that.deferred &&        $that.ready) {
                $that.root._deferred.attrs.push(        $that);
                $that.deferred = true;
    }
}})();
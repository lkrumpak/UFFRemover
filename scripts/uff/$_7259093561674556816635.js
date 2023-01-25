(function(){{
    if (        $that.selfUpdating) {
                $that.update();
    } else if (!        $that.deferred) {
                $that.root._deferred.evals.push(        $that);
                $that.deferred = true;
    }
}})();
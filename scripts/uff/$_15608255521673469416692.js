(function(){{
    var query;
    while (        $that.complexParameters.length) {
                $that.complexParameters.pop().teardown();
    }
    while (        $that.observers.length) {
                $that.observers.pop().cancel();
    }
    if (query =         $that.root._liveComponentQueries[        $that.name]) {
        query._remove(        $that);
    }
        $that.instance.teardown();
}})();
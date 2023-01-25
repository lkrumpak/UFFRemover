(function(){{
    if (        $that.hasNavigated) {
        History.isRoutingBack = e.direction === 'back';
                $that.exec(e.url, e).always(function () {
            History.isRoutingBack = false;
        });
    }
}})();
(function(){{
    if (        $that.deferred === true) {
        return;
    }
        $that.root._deferred.attrs.push(    $that);
        $that.deferred = true;
}})();
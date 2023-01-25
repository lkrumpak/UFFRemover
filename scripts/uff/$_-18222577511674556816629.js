(function(){{
    var values;
    if (wildcard.test(keypath)) {
        values = getPattern(        $that.root, keypath);
        for (keypath in values) {
            if (values.hasOwnProperty(keypath)) {
                                $that.update(keypath);
            }
        }
        return;
    }
    if (        $that.defer &&        $that.ready) {
                $that.root._deferred.observers.push(        $that.getProxy(keypath));
        return;
    }
        $that.reallyUpdate(keypath);
}})();
(function(){{
    var args = [];
    if (typeof name == 'string' && typeof computeFrom == 'object' && typeof callback == 'function' && !        $that.isCompute(name)) {
        _computed[name] = [];
        simpleLoop(computeFrom, function (property) {
            _computed[name].push(this.watchValue(property, function () {
                this.set(name, callback.call(scope));
            }, this));
        },         $that);
                $that.set(name, callback.call(scope));
        return true;
    } else {
        return false;
    }
}})();
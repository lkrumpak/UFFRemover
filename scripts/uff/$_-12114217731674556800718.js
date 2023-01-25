(function(){{
    if (        $that.active) {
        var value =         $that.get();
        if (value !==            $that.value || // Deep watchers and watchers on Object/Arrays should fire even
            // when the value is the same, because the value may
            // have mutated.
            isObject(value) ||            $that.deep) {
            // set new value
            var oldValue =             $that.value;
                        $that.value = value;
            if (                $that.user) {
                try {
                                        $that.cb.call(                    $that.vm, value, oldValue);
                } catch (e) {
                    /* istanbul ignore else */
                    if (config.errorHandler) {
                        config.errorHandler.call(null, e,                         $that.vm);
                    } else {
                        'development' !== 'production' && warn('Error in watcher "' +                        $that.expression + '"',                         $that.vm);
                        throw e;
                    }
                }
            } else {
                                $that.cb.call(                $that.vm, value, oldValue);
            }
        }
    }
}})();
(function(){{
    var value =     $that.root.get(keypath);
    if (        $that.updating) {
                $that.values[keypath] = value;
        return;
    }
        $that.updating = true;
    if (!isEqual(value,         $that.values[keypath]) || !        $that.ready) {
        try {
                        $that.callback.call(            $that.context, value,             $that.values[keypath], keypath);
        } catch (err) {
            if (                $that.debug ||                $that.root.debug) {
                throw err;
            }
        }
                $that.values[keypath] = value;
    }
        $that.updating = false;
}})();
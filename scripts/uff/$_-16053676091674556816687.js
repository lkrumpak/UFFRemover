(function(){{
    var value;
    if (typeof keypath !== 'string') {
        if (            $that.debug) {
            throw new Error('Bad arguments');
        }
        return;
    }
    value =     $that.get(keypath);
        $that.set(keypath, !value);
}})();
(function(){{
    var args = getArgs(arguments), len = where &&        $that.length ?         $that.length - 1 : 0;
    var res = [][name].apply(    $that, args);
    // Create a change where the args are
    // `len` - Where these items were removed.
    // `remove` - Items removed.
    // `undefined` - The new values (there are none).
    // `res` - The old, removed values (should these be unbound).
        $that._triggerChange('' + len, 'remove', undefined, [res]);
    if (res && res.unbind) {
        can.stopListening.call(        $that, res, 'change');
    }
    return res;
}})();
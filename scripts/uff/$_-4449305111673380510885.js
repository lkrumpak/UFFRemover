(function(){{
    var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce++;
        $that[callback] = true;
    return callback;
}})();
(function(){{
    var apply, previousData;
    if (_data[func]) {
        previousData = clone(_data);
        apply =         $that.proxy.apply(        $that, arguments);
        _notifyDiffs(previousData);
        _storeObservable.notify('altered', _data, previousData);
        return apply;
    } else {
        return false;
    }
}})();
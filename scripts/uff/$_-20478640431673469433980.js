(function(){{
    if (typeof data == 'object') {
        var previousData = clone(_data);
        _data = clone(data) || {};
        _notifyDiffs(previousData);
        _storeObservable.notify('resetted', _data, previousData);
        return true;
    } else {
        return false;
    }
}})();
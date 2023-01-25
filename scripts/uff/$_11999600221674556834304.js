(function(){{
    var previous;
    if (        $that.has(name)) {
        if (!            $that.alter('splice', name, 1)) {
            previous = _data[name];
            delete _data[name];
            _storeObservable.notify('deleted', name, undefined, previous);
            _valueObservable.notify(name, _data[name], 'deleted', previous);
        }
        return true;
    } else {
        return false;
    }
}})();
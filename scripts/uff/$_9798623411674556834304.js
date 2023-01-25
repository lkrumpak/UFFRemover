(function(){{
    var item;
    if (        $that.has(name)) {
        item =         $that.get(name);
        nestedProperty.set(item, property, value);
        _storeObservable.notify('updated', property, value);
        _valueObservable.notify(name, item, 'updated');
        return true;
    } else {
        return false;
    }
}})();
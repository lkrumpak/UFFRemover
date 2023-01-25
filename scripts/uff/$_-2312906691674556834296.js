(function(){{
    if (_observers[id]) {
        _observers[id].forEach(function (handler) {
            _model.unwatchValue(handler);
        });
        delete _observers[id];
    }
}})();
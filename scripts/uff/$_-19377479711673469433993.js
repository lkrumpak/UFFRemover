(function(){{
    if (_topics[topic]) {
        delete _topics[topic];
    } else {
        _topics = {};
    }
    return true;
}})();
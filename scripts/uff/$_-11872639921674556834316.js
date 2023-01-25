(function(){{
    var topic = handle[0], idx = handle[1];
    if (_topics[topic] && _topics[topic][idx]) {
        // delete value so the indexes don't move
        delete _topics[topic][idx];
        // If the topic is only set with falsy values, delete it;
        if (!_topics[topic].some(function (value) {
                return !!value;
            })) {
            delete _topics[topic];
        }
        return true;
    } else {
        return false;
    }
}})();
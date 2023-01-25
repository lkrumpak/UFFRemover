(function(){{
    for (var registrationName in listenerBank) {
        delete listenerBank[registrationName][id];
    }
}})();
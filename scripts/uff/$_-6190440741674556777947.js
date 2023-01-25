(function(){{
    // indicate that data is changing
    changingData = 1;
    clearTimeout(timer);
    timer = setTimeout(function () {
        // indicate that the hash is set to look like the data
        changingData = 0;
        var serialized = can.route.data.serialize(), path = can.route.param(serialized, true);
        can.route._call('setURL', path);
        lastHash = path;
    }, 10);
}})();
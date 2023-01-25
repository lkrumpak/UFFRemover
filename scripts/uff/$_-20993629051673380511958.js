(function(){{
    var newVal = get.call(context);
    if (newVal !== value) {
        oldUpdater(newVal, value);
    }
}})();
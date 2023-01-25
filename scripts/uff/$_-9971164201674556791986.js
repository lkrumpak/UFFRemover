(function(){{
    if (hold) {
        jQuery.readyWait++;
    } else {
        jQuery.ready(true);
    }
}})();
(function(){{
    if (!jQuery.isReady) {
        try {
            // Use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            top.doScroll('left');
        } catch (e) {
            return setTimeout(doScrollCheck, 50);
        }
        // detach all dom ready events
        detach();
        // and execute any waiting functions
        jQuery.ready();
    }
}})();
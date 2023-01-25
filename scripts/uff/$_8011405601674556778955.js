(function(){{
    // Autosave when changing the text or completing the todo
        $that.on('change', function (ev, prop) {
        if (prop === 'text' || prop === 'complete') {
            ev.target.save();
        }
    });
}})();
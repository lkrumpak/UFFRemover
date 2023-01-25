(function(){{
    if (ev.keyCode === 13) {
        return original.call(        $that, ev);
    }
}})();
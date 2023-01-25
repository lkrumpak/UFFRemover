(function(){{
    if (once) {
        target.$once(event, fn);
    } else {
        target.$on(event, fn);
    }
}})();
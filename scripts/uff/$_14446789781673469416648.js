(function(){{
    while (observers.length) {
        observers.pop().cancel();
    }
}})();
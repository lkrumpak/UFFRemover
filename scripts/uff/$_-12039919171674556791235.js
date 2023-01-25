(function(){{
    if (event.which === ESCAPE_KEY) {
        event.currentTarget.value = item.title;
        event.currentTarget.blur();
        update();
        return true;
    } else {
        return false;
    }
}})();
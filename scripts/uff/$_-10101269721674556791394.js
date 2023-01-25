(function(){{
    items = items.filter(function (item) {
        return !item.completed;
    });
    update();
}})();
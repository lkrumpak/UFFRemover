(function(){{
    items.forEach(function (item) {
        item.completed = event.currentTarget.checked;
    });
    update();
}})();
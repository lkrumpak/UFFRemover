(function(){{
    var value = event.currentTarget.value.trim();
    if (event.which === ENTER_KEY && value !== '') {
        items.push({
            title: value,
            completed: false
        });
        event.currentTarget.value = '';
        update();
    }
}})();
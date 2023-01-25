(function(){{
    if (event.keyCode === ENTER_KEY && node.value.trim()) {
        model.alter('push', {
            title: node.value.trim(),
            completed: false
        });
        node.value = '';
    }
}})();
(function(){{
    if (cancelEditing(event, item)) {
        return;
    }
    var value = event.currentTarget.value.trim();
    if (event.which === ENTER_KEY || event.type === 'blur') {
        if (value) {
            item.title = value;
        } else {
            items.splice(items.indexOf(item), 1);
        }
        item.editing = '';
        event.currentTarget.value = value;
        update();
    }
}})();
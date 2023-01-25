(function(){{
    var description = event.node.value.trim();
    if (!description) {
        return;
    }
        $that.get('items').push({
        description: description,
        completed: false
    });
    event.node.value = '';
}})();
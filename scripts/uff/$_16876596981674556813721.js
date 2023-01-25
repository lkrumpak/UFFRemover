(function(){{
    var listItem = qs('[data-id="' + id + '"]');
    if (!listItem) {
        return;
    }
    listItem.className = completed ? 'completed' : '';
    // In case it was toggled from an event and not by clicking the checkbox
    qs('input', listItem).checked = completed;
}})();
(function(){{
    var listItem = qs('[data-id="' + id + '"]');
    if (!listItem) {
        return;
    }
    listItem.className = listItem.className + ' editing';
    var input = document.createElement('input');
    input.className = 'edit';
    listItem.appendChild(input);
    input.focus();
    input.value = title;
}})();
(function(){{
    var listItem = qs('[data-id="' + id + '"]');
    if (!listItem) {
        return;
    }
    var input = qs('input.edit', listItem);
    listItem.removeChild(input);
    listItem.className = listItem.className.replace('editing', '');
    qsa('label', listItem).forEach(function (label) {
        label.textContent = title;
    });
}})();
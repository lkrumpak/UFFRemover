(function(){{
    item.editing(false);
    var title = item.title();
    var trimmedTitle = title.trim();
    // Observable value changes are not triggered if they're consisting of whitespaces only
    // Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
    // And if yes, we've to set the new value manually
    if (title !== trimmedTitle) {
        item.title(trimmedTitle);
    }
    if (!trimmedTitle) {
                $that.remove(item);
    }
}})();
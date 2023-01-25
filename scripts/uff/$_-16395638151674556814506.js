(function(){{
    for (var key in attrs) {
        if (attrs[key] !== model.get(key))
            return false;
    }
    return true;
}})();
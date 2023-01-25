(function(){{
    if (local$torage && typeof local$torage.setItem == 'function') {
        _localStorage = local$torage;
        return true;
    } else {
        return false;
    }
}})();
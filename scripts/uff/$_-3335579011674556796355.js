(function(){{
    if (!value && value !== 0) {
        return true;
    } else if (isArray(value) && value.length === 0) {
        return true;
    } else {
        return false;
    }
}})();
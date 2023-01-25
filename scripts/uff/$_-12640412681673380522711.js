(function(){{
    if (!duplicates[key])
        duplicates[key] = {};
    if (!duplicates[key][item]) {
        duplicates[key][item] = true;
        return memo.concat(encodeURIComponent(key) + '=' + encodeURIComponent(item));
    }
    return memo;
}})();
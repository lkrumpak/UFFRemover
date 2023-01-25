(function(){{
    locale = (locale || 'default').toLowerCase();
    return _cache.get(locale) || _cache.get(locale.split('_')[0]) || _cache.get('default');
}})();
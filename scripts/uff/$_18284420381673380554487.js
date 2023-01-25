(function(){{
    if (!code) {
        code = locale;
        locale = 'default';
    }
    var translation = Translation.forLocale(locale), result = null;
    if (translation) {
        result = translation.get(code);
    }
    if (result === null) {
        translation = Translation.forLocale(locale.split('_')[0]);
        if (translation) {
            result = translation.get(code);
        }
    }
    if (result === null) {
        translation = Translation.forLocale('default');
        if (translation) {
            result = translation.get(code);
        }
    }
    return result;
}})();
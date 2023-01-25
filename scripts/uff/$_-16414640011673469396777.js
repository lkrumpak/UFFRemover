(function(){{
    var checkbox, key, name, result, _i, _j, _k, _len, _len1, _len2, _name, _ref, _ref1, _ref2;
    result = {};
    _ref = $(form).find('[type=checkbox]:not([value])');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        checkbox = _ref[_i];
        result[checkbox.name] = $(checkbox).prop('checked');
    }
    _ref1 = $(form).find('[type=checkbox][name$="[]"]');
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        checkbox = _ref1[_j];
        name = checkbox.name.replace(/\[\]$/, '');
        result[name] || (result[name] = []);
        if ($(checkbox).prop('checked')) {
            result[name].push(checkbox.value);
        }
    }
    _ref2 = $(form).serializeArray();
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        key = _ref2[_k];
        result[_name = key.name] || (result[_name] = key.value);
    }
    return    $that.load(result);
}})();
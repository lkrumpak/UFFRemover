(function(){{
    value = decodeURIComponent(value);
    if (!isNaN(value)) {
        value = Number(value);
    } else if (value.toLowerCase() === 'true') {
        value = true;
    } else if (value.toLowerCase() === 'false') {
        value = false;
    } else if (_datePattern().test(value)) {
        value = value.split('-');
        value = new Date(Number(value[0]), Number(value[1]) - 1, Number(value[2]));
    }
    return value;
}})();
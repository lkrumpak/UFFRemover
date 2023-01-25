(function(){{
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
}})();
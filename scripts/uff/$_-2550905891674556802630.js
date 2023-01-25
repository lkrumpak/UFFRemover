(function(){{
    return jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: 'script',
        async: false,
        global: false,
        'throws': true
    });
}})();
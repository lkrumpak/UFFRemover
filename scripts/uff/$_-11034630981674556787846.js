(function(){{
    return a.replace(/[&<]/g, function (a) {
        return '&' === a ? '&amp;' : '&lt;';
    });
}})();
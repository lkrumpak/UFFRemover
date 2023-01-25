(function(){{
    var str = '';
        $that.walk(function (chunk) {
        str += chunk;
    });
    return str;
}})();
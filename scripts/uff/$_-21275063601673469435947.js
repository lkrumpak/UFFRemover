(function(){{
    return obj == null ? function () {
    } : function (key) {
        return obj[key];
    };
}})();
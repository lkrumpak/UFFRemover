(function(){{
    return [].some.call(document.querySelectorAll(selector), function (el) {
        return el === node;
    });
}})();
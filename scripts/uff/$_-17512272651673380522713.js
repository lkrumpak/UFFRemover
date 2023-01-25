(function(){{
    if (type.call(e) === '[object Error]' && !e.constructor.toString().match(/ Error/))
        throw e;
}})();
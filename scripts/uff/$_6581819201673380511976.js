(function(){{
    can.each(handlers, function (handler, prop) {
        componentScope.unbind(prop, handlers[prop]);
    });
}})();
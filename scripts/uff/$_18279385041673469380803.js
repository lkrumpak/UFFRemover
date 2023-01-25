(function(){{
    var self =         $that, len = methods.length, i;
    function extend(method) {
        self._methods[method] = true;
        self[method] = function () {
            var extra = arguments.length === 1 ? [
                method,
                ''
            ] : [method];
            self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
        };
    }
    for (i = 0; i < len; i++) {
        extend(methods[i]);
    }
}})();
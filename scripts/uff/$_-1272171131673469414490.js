(function(){{
    Model.prototype[method] = function () {
        var args = slice.call(arguments);
        args.unshift(this.attributes);
        return _[method].apply(_, args);
    };
}})();
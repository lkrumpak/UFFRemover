(function(){{
    var Instance;
    if (attributes == null) {
        attributes = [];
    }
    Instance = function (_super) {
        __extends(Instance, _super);
        function Instance() {
            return Instance.__super__.constructor.apply(this, arguments);
        }
        return Instance;
    }(    $that);
    Instance.configure.apply(Instance, [name].concat(__slice.call(attributes)));
    return Instance;
}})();
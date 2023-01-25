(function(){{
    var Result;
    Result = function (_super) {
        __extends(Result, _super);
        function Result() {
            return Result.__super__.constructor.apply(this, arguments);
        }
        return Result;
    }(    $that);
    if (instances) {
        Result.include(instances);
    }
    if (statics) {
        Result.extend(statics);
    }
    if (typeof Result.unbind === 'function') {
        Result.unbind();
    }
    return Result;
}})();
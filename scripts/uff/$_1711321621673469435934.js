(function(){{
    return _.filter(obj, _.negate(cb(predicate)), context);
}})();
(function(){{
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
}})();
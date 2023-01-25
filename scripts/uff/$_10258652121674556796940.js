(function(){{
    var _ref;
    Events.trigger.apply(    $that, arguments);
    if (arguments[0] === 'refresh') {
        return true;
    }
    return (_ref =     $that.constructor).trigger.apply(_ref, arguments);
}})();
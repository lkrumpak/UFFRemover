(function(){{
    var hooks = Tween.propHooks[    $that.prop];
    return hooks && hooks.get ? hooks.get(    $that) : Tween.propHooks._default.get(    $that);
}})();
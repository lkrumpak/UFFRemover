(function(){{
    return speed == null || typeof speed === 'boolean' ? cssFn.apply(    $that, arguments) :     $that.animate(genFx(name, true), speed, easing, callback);
}})();
(function(){{
    var stub, constructor =         $that.constructor;
    // Update attributes if attributes have been passed
    stub = attrs && typeof attrs === 'object' &&    $that.attr(attrs.attr ? attrs.attr() : attrs);
    // triggers change event that bubble's like
    // handler( 'change','1.destroyed' ). This is used
    // to remove items on destroyed from Model Lists.
    // but there should be a better way.
    can.trigger(    $that, 'change', funcName);
    // Call event on the instance's Class
    can.trigger(constructor, funcName,     $that);
}})();
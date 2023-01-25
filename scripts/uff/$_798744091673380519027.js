(function(){{
    var tween, collection = (tweeners[prop] || []).concat(tweeners['*']), index = 0, length = collection.length;
    for (; index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
            // We're done with this property
            return tween;
        }
    }
}})();
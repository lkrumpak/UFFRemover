(function(){{
    attrs = attrs || {};
    var identity =     $that.id;
    if (attrs[identity] && attrs[identity] !== id) {
        attrs['new' + can.capitalize(id)] = attrs[identity];
        delete attrs[identity];
    }
    attrs[identity] = id;
    return attrs;
}})();
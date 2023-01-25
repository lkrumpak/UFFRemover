(function(){{
    if (!attributes) {
        return;
    }
    if (typeof attributes.serialize === 'function') {
        attributes = attributes.serialize();
    }
    if (prop) {
        attributes = can.getObject(prop || 'data', attributes);
    }
    var id = attributes[        $that.id], model = (id || id === 0) &&        $that.store[id] ?         $that.store[id].attr(attributes,         $that.removeAttr || false) : new        $that(attributes);
    return model;
}})();
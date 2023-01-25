(function(){{
    var i, name, data, elem =         $that[0], attrs = elem && elem.attributes;
    // Special expections of .data basically thwart jQuery.access,
    // so implement the relevant behavior ourselves
    // Gets all values
    if (key === undefined) {
        if (            $that.length) {
            data = jQuery.data(elem);
            if (elem.nodeType === 1 && !jQuery._data(elem, 'parsedAttrs')) {
                i = attrs.length;
                while (i--) {
                    // Support: IE11+
                    // The attrs elements can be null (#14894)
                    if (attrs[i]) {
                        name = attrs[i].name;
                        if (name.indexOf('data-') === 0) {
                            name = jQuery.camelCase(name.slice(5));
                            dataAttr(elem, name, data[name]);
                        }
                    }
                }
                jQuery._data(elem, 'parsedAttrs', true);
            }
        }
        return data;
    }
    // Sets multiple values
    if (typeof key === 'object') {
        return        $that.each(function () {
            jQuery.data(this, key);
        });
    }
    return arguments.length > 1 ? // Sets one value
        $that.each(function () {
        jQuery.data(this, key, value);
    }) : // Gets one value
    // Try to fetch any internally stored data first
    elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
}})();
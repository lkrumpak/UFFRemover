(function(){{
    for (var attr, name, value, attrs = element.attributes, j = 0, jj = attrs && attrs.length; j < jj; j++) {
        attr = attrs[j];
        if (attr.specified) {
            name = attr.name;
            value = attr.value;
            if (events[name]) {
                var handler = getHandlerFromPattern(object, value);
                if (handler && isFunction(handler)) {
                    addEvent(element, events[name], handler);
                    eventStore.push({
                        element: element,
                        type: events[name],
                        handler: handler
                    });
                }
            }
        }
    }
}})();
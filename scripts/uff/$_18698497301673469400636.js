(function(){{
    if (!definition) {
        return        $that.options[type + 's'][id];
    } else {
        /* istanbul ignore if */
        {
            if (type === 'component' && config.isReservedTag(id)) {
                warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
        }
        if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition =             $that.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
            definition = {
                bind: definition,
                update: definition
            };
        }
                $that.options[type + 's'][id] = definition;
        return definition;
    }
}})();
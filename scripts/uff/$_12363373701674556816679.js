(function(){{
    var partial;
    if (registryOwner.partials[name]) {
        if (typeof registryOwner.partials[name] === 'string') {
            if (!parse) {
                throw new Error(errors.missingParser);
            }
            partial = parse(registryOwner.partials[name], registryOwner.parseOptions);
            registerPartial(partial, name, registryOwner.partials);
        }
        return unpack(registryOwner.partials[name]);
    }
}})();
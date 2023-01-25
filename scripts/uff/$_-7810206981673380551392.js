(function(){{
    var key;
    if (Child.partials) {
        for (key in Child.partials) {
            if (Child.partials.hasOwnProperty(key) && typeof Child.partials[key] === 'string') {
                if (!parse) {
                    throw new Error(errors.missingParser);
                }
                Child.partials[key] = parse(Child.partials[key], Child);
            }
        }
    }
}})();
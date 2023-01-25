(function(){{
    var templateEl;
    if (typeof Child.template === 'string') {
        if (!parse) {
            throw new Error(errors.missingParser);
        }
        if (Child.template.charAt(0) === '#' && isClient) {
            templateEl = document.getElementById(Child.template.substring(1));
            if (templateEl && templateEl.tagName === 'SCRIPT') {
                Child.template = parse(templateEl.innerHTML, Child);
            } else {
                throw new Error('Could not find template element (' + Child.template + ')');
            }
        } else {
            Child.template = parse(Child.template, Child);
        }
    }
}})();
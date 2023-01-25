(function(){{
    getMatches(el, selector).forEach(function (match) {
        if (!value && value !== 0)
            value = '';
        // only apply bindings if element is not currently focused
        if (document.activeElement !== match)
            match.value = value;
    });
    previousValue = value;
}})();
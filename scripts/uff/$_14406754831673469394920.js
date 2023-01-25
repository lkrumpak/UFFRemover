(function(){{
    // Return undefined in the case of empty string
    // Note: IE uppercases css property names, but if we were to .toLowerCase()
    // .cssText, that would destroy case senstitivity in URL's, like in "background"
    return elem.style.cssText || undefined;
}})();
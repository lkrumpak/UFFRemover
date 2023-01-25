(function(){{
    // Support: Webkit
    // "" is returned instead of "on" if a value isn't specified
    return elem.getAttribute('value') === null ? 'on' : elem.value;
}})();
(function(){{
    // Shortcut for names that are not vendor prefixed
    if (name in style) {
        return name;
    }
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
    while (i--) {
        name = cssPrefixes[i] + capName;
        if (name in style) {
            return name;
        }
    }
    return origName;
}})();
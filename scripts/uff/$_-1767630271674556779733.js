(function(){{
    var owner = component._currentElement._owner || null;
    if (owner) {
        var name = owner.getName();
        if (name) {
            return ' Check the render method of `' + name + '`.';
        }
    }
    return '';
}})();
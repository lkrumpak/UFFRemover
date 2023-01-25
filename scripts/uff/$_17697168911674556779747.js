(function(){{
    if (ReactCurrentOwner.current) {
        var name = ReactCurrentOwner.current.getName();
        if (name) {
            return ' Check the render method of `' + name + '`.';
        }
    }
    return '';
}})();
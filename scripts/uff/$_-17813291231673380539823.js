(function(){{
    return function (obj) {
        if (obj === attrs)
            return true;
        //avoid comparing an object to itself.
        for (var key in attrs) {
            if (attrs[key] !== obj[key])
                return false;
        }
        return true;
    };
}})();
(function(){{
    while (e) {
        if (e.inStub)
            return true;
        e = e.parentNode;
    }
    return false;
}})();
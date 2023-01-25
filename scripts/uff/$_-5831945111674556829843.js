(function(){{
    event.currentTarget = injection.Mount.getNode(domID);
    var returnValue = listener(event, domID);
    event.currentTarget = null;
    return returnValue;
}})();
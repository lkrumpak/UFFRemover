(function(){{
    el.ifProcessed = true;
    // avoid recursion
    return genIfConditions(el.ifConditions.slice());
}})();
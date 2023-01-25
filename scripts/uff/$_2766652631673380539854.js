(function(){{
    return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val;
}})();
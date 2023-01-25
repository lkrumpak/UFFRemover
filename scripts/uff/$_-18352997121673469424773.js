(function(){{
    if (match('{')) {
        return parseFunctionSourceElements();
    }
    return parseAssignmentExpression();
}})();
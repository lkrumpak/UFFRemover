(function(){{
    var isValid = true;
    for (var attribute in messages) {
        if (messages[attribute].length > 0) {
            isValid = false;
        }
    }
    messages.isValid = isValid;
    return messages;
}})();
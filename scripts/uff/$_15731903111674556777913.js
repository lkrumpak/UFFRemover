(function(){{
    return convertBadValues(str).replace(strCamelMatch, function (str, offset) {
        return str.charAt(0) + '-' + str.charAt(1).toLowerCase();
    });
}})();
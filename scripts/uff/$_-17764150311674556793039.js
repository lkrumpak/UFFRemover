(function(){{
    string = baseToString(string);
    return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
}})();
(function(){{
    try {
        return decodeURIComponent(str);
    } catch (err) {
        return String.fromCharCode(65533)    // UTF 8 invalid char
;
    }
}})();
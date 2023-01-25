(function(){{
    if (!code) {
        return 65533;
    }
    if (code === 10) {
        return 32;
    }
    if (code < 128) {
        return code;
    }
    if (code <= 159) {
        return controlCharacters[code - 128];
    }
    if (code < 55296) {
        return code;
    }
    if (code <= 57343) {
        return 65533;
    }
    if (code <= 65535) {
        return code;
    }
    return 65533;
}})();
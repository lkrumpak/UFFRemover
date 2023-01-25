(function(){{
    return {
        left: open.charAt(2) === '~',
        right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
}})();
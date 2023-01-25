(function(){{
    if (val === null || val === '') {
        el.removeAttribute('src');
    } else {
        el.setAttribute('src', val);
    }
}})();
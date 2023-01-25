(function(){{
    /* istanbul ignore if */
    if (!cls || !cls.trim()) {
        return;
    }
    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.remove(c);
            });
        } else {
            el.classList.remove(cls);
        }
    } else {
        var cur = ' ' + el.getAttribute('class') + ' ';
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        el.setAttribute('class', cur.trim());
    }
}})();
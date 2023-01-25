(function(){{
    // Mozilla always adds an entry to the history
    if (        $that.mode === 'legacy') {
                $that.writeFrame(s);
    }
    if (        $that.history === true) {
        window.history.pushState({}, document.title, s);
        // Fire an onpopstate event manually since pushing does not obviously
        // trigger the pop event.
                $that.fire();
    } else {
        dloc.hash = s[0] === '/' ? s : '/' + s;
    }
    return    $that;
}})();
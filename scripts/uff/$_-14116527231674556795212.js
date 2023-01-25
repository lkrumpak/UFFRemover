(function(){{
    if (        $that !== safeActiveElement() &&        $that.focus) {
        try {
                        $that.focus();
            return false;
        } catch (e) {
        }
    }
}})();
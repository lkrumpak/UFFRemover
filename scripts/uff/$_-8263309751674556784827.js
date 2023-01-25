(function(){{
    if (        $that !== safeActiveElement() &&        $that.focus) {
                $that.focus();
        return false;
    }
}})();
(function(){{
    if (        $that === safeActiveElement() &&        $that.blur) {
                $that.blur();
        return false;
    }
}})();
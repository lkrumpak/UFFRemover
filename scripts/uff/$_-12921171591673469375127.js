(function(){{
    if (!        $that.isValidLevel(t))
                $that.error(        $that.$classpath, 'Invalid level passed for logging the message');
    else if (        $that.isLogEnabled(t, e)) {
        var s =             $that.prepareLoggedMessage(r, n), o =             $that.getAppenders();
        for (var u = 0; u < o.length; u++)
            t ==            $that.LEVEL_DEBUG && o[u].debug(e, s, r, i), t ==            $that.LEVEL_INFO && o[u].info(e, s, r, i), t ==            $that.LEVEL_WARN && o[u].warn(e, s, r, i), t ==            $that.LEVEL_ERROR && o[u].error(e, s, r, i);
    }
}})();
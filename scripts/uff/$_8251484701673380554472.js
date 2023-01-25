(function(){{
    if (!        $that.hasLoaded) {
        if (            $that.code) {
                        $that.add(            $that.code);
        } else if (            $that.src) {
                        $that.load(            $that.src);
        }
                $that.hasLoaded = true;
    }
    return    $that.cache.get(code);
}})();
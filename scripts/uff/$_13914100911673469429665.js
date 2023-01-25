(function(){{
    if (        $that.isMounted()) {
                $that.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore,         $that.getDOMNode()));
    }
        $that.classNameQueue.length = 0;
        $that.timeout = null;
}})();
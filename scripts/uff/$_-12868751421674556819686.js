(function(){{
    if (        $that.onpopstate) {
        History.off('popstate',         $that.onpopstate);
                $that.onpopstate = null;
    }
    Disposable.prototype.dispose.apply(    $that, arguments);
}})();
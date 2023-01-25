(function(){{
    window.removeEventListener('popstate',     $that.checkUrl);
    window.removeEventListener('hashchange',     $that.checkUrl);
    History.started = false;
}})();
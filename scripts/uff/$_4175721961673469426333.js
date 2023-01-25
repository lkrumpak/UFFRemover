(function(){{
    if (        $that.mode === 'modern') {
                $that.history === true ? window.onpopstate() : window.onhashchange();
    } else {
                $that.onHashChanged();
    }
}})();
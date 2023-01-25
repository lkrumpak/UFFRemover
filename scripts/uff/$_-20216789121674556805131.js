(function(){{
    if (!view.insertSelf) {
        if (            $that.reverse &&            $that.el.firstChild) {
                        $that.el.insertBefore(view.el,             $that.el.firstChild);
        } else {
                        $that.el.appendChild(view.el);
        }
    }
}})();
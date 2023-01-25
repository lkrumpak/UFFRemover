(function(){{
    var self =     $that;
    var opts = {
        selector: subview.container || '[data-hook="' + subview.hook + '"]',
        waitFor: subview.waitFor || '',
        prepareView: subview.prepareView || function (el) {
            return new subview.constructor({
                el: el,
                parent: self
            });
        }
    };
    function action() {
        var el, subview;
        // if not rendered or we can't find our element, stop here.
        if (!this.el || !(el = this.query(opts.selector)))
            return;
        if (!opts.waitFor || getPath(this, opts.waitFor)) {
            subview = this[name] = opts.prepareView.call(this, el);
            subview.render();
            this.registerSubview(subview);
            this.off('change', action);
        }
    }
    // we listen for main `change` items
        $that.on('change', action,     $that);
}})();
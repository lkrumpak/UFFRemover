(function(){{
    var self =         $that, templateRenderPromise = new Promise(        $that), redrawPromise = new Promise(        $that), template = Template.get(        $that.template), replaceAll;
    if (typeof selector === 'object' || selector instanceof Model) {
        model = selector;
        replaceAll = true;
        selector = null;
    } else if (typeof selector === 'boolean') {
        replaceAll = selector;
        selector = null;
    } else if (!selector) {
        replaceAll = true;
    }
    model = model ||    $that.model;
    if (model instanceof Model) {
        model = model.toObject();
    }
    // process widget, child view, and
    // child view event maps
    function processMaps() {
        self.createWidgets();
        self.createChildViews();
        self.applyChildViewEvents();
    }
    templateRenderPromise.success(function (html) {
        if (replaceAll) {
            this.disposeChildViews(this.el);
            this.disposeWidgets(this.el);
            this.el.html(html);
            processMaps();
            redrawPromise.resolve(html);
            return;
        }
        if (selector) {
            var $newEl = $('<div>' + html + '</div>').find(selector), $oldEl = this.el.find(selector);
            if ($newEl.length === $oldEl.length) {
                $oldEl.each(function (index) {
                    var $el = $(this);
                    self.disposeChildViews($el);
                    self.disposeWidgets($el);
                    $el.replaceWith($newEl.eq(index)).remove();
                });
                processMaps();
                redrawPromise.resolve(html);
            } else {
                redrawPromise.reject('Count of items matching selector is not the same in the original html and in the newly rendered html.');
            }
        } else {
            redrawPromise.resolve(html);
        }
    }).error(redrawPromise.rejector());
    template.render(model).success(templateRenderPromise.resolver()).error(templateRenderPromise.rejector());
    return redrawPromise;
}})();
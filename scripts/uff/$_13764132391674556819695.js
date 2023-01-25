(function(){{
    var self =         $that, promise = new Promise(        $that), renderPromise = new Promise(        $that), template = Template.get(        $that.template), model =         $that.model;
    if (model instanceof Model) {
        model = model.toObject();
    }
    /**
       * Fires when html from template has rendered
       * @event rendersuccess
       */
    promise.success(function (html) {
        this.trigger('rendersuccess', { html: html });
        renderPromise.resolve();
    })    /**
       * Fired when there was an error during rendering process
       * @event rendererror
       */.error(function (err) {
        this.trigger('rendererror', { err: err });
        renderPromise.reject();
    });
    template.render(model).success(promise.resolver()).error(promise.rejector()).then(function () {
        if (self.className) {
            self.el.addClass(self.className);
        }
    });
    return renderPromise;
}})();
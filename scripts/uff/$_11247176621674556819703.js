(function(){{
    /**
           * Fired when there was an error during rendering process
           * @event rendererror
           */
        $that.trigger('rendererror', { err: err });
    renderPromise.reject();
}})();
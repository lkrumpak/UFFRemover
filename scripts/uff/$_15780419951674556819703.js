(function(){{
    var promise = new Promise(    $that);
        $that.shell.detach();
    delay(promise.resolver());
    promise.then(function () {
        /**
         * Fired when there was an error during rendering process
         * @event rendererror
         */
        this.trigger('exit');
    });
    return promise;
}})();
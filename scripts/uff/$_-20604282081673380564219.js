(function(){{
    'production' !== 'development' ? invariant(ReactElement.isValidElement(element), 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element));
    var transaction;
    try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(true);
        return transaction.perform(function () {
            var componentInstance = instantiateReactComponent(element, null);
            return componentInstance.mountComponent(id, transaction, emptyObject);
        }, null);
    } finally {
        ReactServerRenderingTransaction.release(transaction);
    }
}})();
(function(){{
    'production' !== 'development' ? invariant(ReactElement.isValidElement(element), 'renderToString(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element));
    var transaction;
    try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(false);
        return transaction.perform(function () {
            var componentInstance = instantiateReactComponent(element, null);
            var markup = componentInstance.mountComponent(id, transaction, emptyObject);
            return ReactMarkupChecksum.addChecksumToMarkup(markup);
        }, null);
    } finally {
        ReactServerRenderingTransaction.release(transaction);
    }
}})();
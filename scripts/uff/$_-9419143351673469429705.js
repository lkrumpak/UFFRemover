(function(){{
    if (!context) {
        context = emptyObject;
    }
    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
        $that._render(element, transaction, context);
    ReactUpdates.ReactReconcileTransaction.release(transaction);
}})();
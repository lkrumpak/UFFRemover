(function(){{
    var mediator =     $that.mediatorMap[mediatorName];
    if (mediator) {
        // for every notification the mediator is interested in...
        var interests = mediator.listNotificationInterests();
        for (var i = 0; i < interests.length; i++) {
            // remove the observer linking the mediator to the notification
            // interest
                        $that.removeObserver(interests[i], mediator);
        }
        // remove the mediator from the map
        delete        $that.mediatorMap[mediatorName];
        // alert the mediator that it has been removed
        mediator.onRemove();
    }
    return mediator;
}})();
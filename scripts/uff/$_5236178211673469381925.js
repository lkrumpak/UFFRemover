(function(){{
    var mediator = null;
    if (        $that.view != null) {
        mediator =         $that.view.removeMediator(mediatorName);
    }
    return mediator;
}})();
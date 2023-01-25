(function(){{
    // SIC
    var observers =     $that.observerMap[notificationName];
    for (var i = 0; i < observers.length; i++) {
        if (observers[i].compareNotifyContext(notifyContext) == true) {
            observers.splice(i, 1);
            break;
        }
    }
    if (observers.length == 0) {
        delete        $that.observerMap[notificationName];
    }
}})();
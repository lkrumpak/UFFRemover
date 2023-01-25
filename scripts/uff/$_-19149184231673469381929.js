(function(){{
    if (        $that.hasCommand(notificationName)) {
                $that.view.removeObserver(notificationName,         $that);
                $that.commandMap[notificationName] = null;
    }
}})();
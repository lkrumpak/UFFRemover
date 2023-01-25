(function(){{
        $that.unmountChildren();
    ReactBrowserEventEmitter.deleteAllListeners(    $that._rootNodeID);
    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(    $that._rootNodeID);
        $that._rootNodeID = null;
}})();
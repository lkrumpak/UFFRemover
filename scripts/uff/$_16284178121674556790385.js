(function(){{
    removeEvent(    $that.element, type,     $that.eventHandlers[type]);
        $that.eventHandlers[type] = null;
    delete    $that.eventHandlers[type];
}})();
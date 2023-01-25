(function(){{
    var i = eventStore.length, l = 0;
    while (--i >= l) {
        var item = eventStore[i];
        if (element === item.element || contains(element, item.element)) {
            removeEvent(item.element, item.type, item.handler);
            eventStore.splice(i, 1);
        }
    }
}})();
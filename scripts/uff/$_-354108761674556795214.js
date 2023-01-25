(function(){{
    var elem = event.target;
    // Swallow native change events from checkbox/radio, we already triggered them above
    if (        $that !== elem || event.isSimulated || event.isTrigger || elem.type !== 'radio' && elem.type !== 'checkbox') {
        return event.handleObj.handler.apply(        $that, arguments);
    }
}})();
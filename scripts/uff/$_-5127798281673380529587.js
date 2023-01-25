(function(){{
    if (rformElems.test(        $that.nodeName)) {
        // IE doesn't fire change on a check/radio until blur; trigger it on click
        // after a propertychange. Eat the blur-change in special.change.handle.
        // This still fires onchange a second time for check/radio after blur.
        if (            $that.type === 'checkbox' ||            $that.type === 'radio') {
            jQuery.event.add(            $that, 'propertychange._change', function (event) {
                if (event.originalEvent.propertyName === 'checked') {
                    this._just_changed = true;
                }
            });
            jQuery.event.add(            $that, 'click._change', function (event) {
                if (this._just_changed && !event.isTrigger) {
                    this._just_changed = false;
                }
                // Allow triggered, simulated change events (#11500)
                jQuery.event.simulate('change', this, event, true);
            });
        }
        return false;
    }
    // Delegated event; lazy-add a change handler on descendant inputs
    jQuery.event.add(    $that, 'beforeactivate._change', function (e) {
        var elem = e.target;
        if (rformElems.test(elem.nodeName) && !jQuery._data(elem, 'changeBubbles')) {
            jQuery.event.add(elem, 'change._change', function (event) {
                if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                    jQuery.event.simulate('change', this.parentNode, event, true);
                }
            });
            jQuery._data(elem, 'changeBubbles', true);
        }
    });
}})();
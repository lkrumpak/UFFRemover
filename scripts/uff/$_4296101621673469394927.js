(function(){{
    return    $that.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, 'elements');
        return elements ? jQuery.makeArray(elements) : this;
    }).filter(function () {
        var type = this.type;
        // Use .is(":disabled") so that fieldset[disabled] works
        return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
    }).map(function (i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
            return {
                name: elem.name,
                value: val.replace(rCRLF, '\r\n')
            };
        }) : {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }).get();
}})();
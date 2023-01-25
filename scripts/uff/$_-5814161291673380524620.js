(function(){{
    if (        $that.attributes) {
        for (var i = 0, l =                 $that.attributes.length; i < l; i++) {
            var att =             $that.attributes[i];
            if (att.interpolationName && att.interpolationName.value === name) {
                return att;
            }
        }
    }
}})();
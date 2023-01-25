(function(){{
    return    $that.map(function () {
        var offsetParent = this.offsetParent || docElem;
        while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
    });
}})();
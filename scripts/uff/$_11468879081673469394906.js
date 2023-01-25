(function(){{
    if (jQuery.nodeName(        $that, 'input') &&        $that.type === 'checkbox' &&        $that.click) {
                $that.click();
        return false;
    }
}})();
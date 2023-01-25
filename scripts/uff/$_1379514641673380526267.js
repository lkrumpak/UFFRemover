(function(){{
    if (        $that.type === 'checkbox' &&        $that.click && jQuery.nodeName(        $that, 'input')) {
                $that.click();
        return false;
    }
}})();
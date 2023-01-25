(function(){{
    if (        $that.isCheckebox) {
        var value =             $that.options.value(), trueValue =             $that.options.trueValue() || true;
                $that.element[0].checked = value === trueValue;
    } else {
        var method =         $that.options.value() ===        $that.element[0].value ? 'setAttr' : 'removeAttr';
        can.view.elements[method](        $that.element[0], 'checked', true);
    }
}})();
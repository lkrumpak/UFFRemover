(function(){{
    if (        $that.isCheckebox) {
                $that.options.value(        $that.element[0].checked ?         $that.options.trueValue() :         $that.options.falseValue());
    } else {
        if (            $that.element[0].checked) {
                        $that.options.value(            $that.element[0].value);
        }
    }
}})();
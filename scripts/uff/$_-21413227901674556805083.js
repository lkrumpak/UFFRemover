(function(){{
    if (e.which === ENTER_KEY) {
                $that.input.blur();
    } else if (e.which === ESC_KEY) {
                $that.input.value =         $that.model.title;
                $that.input.blur();
    }
}})();
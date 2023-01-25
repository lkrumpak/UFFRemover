(function(){{
    var val =     $that.input.value.trim();
    if (val) {
                $that.model.set({
            title: val,
            editing: false
        });
    } else {
                $that.model.destroy();
    }
}})();
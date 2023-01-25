(function(){{
    var value = discard ?     $that.model.get('title') :     $that.input.value.trim();
        $that.input.value = value;
    if (value) {
                $that.model.save({ title: value });
    } else {
                $that.clear();
    }
        $that.el.classList.remove('editing');
}})();
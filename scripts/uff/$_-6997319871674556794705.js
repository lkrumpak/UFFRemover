(function(){{
    if (e.which === TodoView.ESC_KEY) {
                $that.$el.removeClass('editing');
        // Also reset the hidden input back to the original value.
                $that.input.val(        $that.model.get('title'));
    }
}})();
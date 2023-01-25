(function(){{
    var value =     $that.$input.val();
    var trimmedValue = value.trim();
    // We don't want to handle blur events from an item that is no
    // longer being edited. Relying on the CSS class here has the
    // benefit of us not having to maintain state in the DOM and the
    // JavaScript logic.
    if (!        $that.$el.hasClass('editing')) {
        return;
    }
    if (trimmedValue) {
                $that.model.save({ title: trimmedValue });
    } else {
                $that.clear();
    }
        $that.$el.removeClass('editing');
}})();
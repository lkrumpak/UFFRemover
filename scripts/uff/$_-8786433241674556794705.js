(function(){{
    var trimmedValue =     $that.input.val().trim();
    if (trimmedValue) {
                $that.model.save({ title: trimmedValue });
    } else {
                $that.clear();
    }
        $that.$el.removeClass('editing');
}})();
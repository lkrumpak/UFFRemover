(function(){{
    var val;
        $that.el.removeClass('editing');
    val = $.trim(    $that.editElem.val());
    if (val) {
        return        $that.todo.updateAttribute('title', val);
    } else {
        return        $that.remove();
    }
}})();
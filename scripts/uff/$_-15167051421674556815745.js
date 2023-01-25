(function(){{
        $that.el.innerHTML =     $that.template(    $that.model.toJSON());
    var method =     $that.model.get('completed') ? 'add' : 'remove';
        $that.el.classList[method]('completed');
        $that.toggleVisible();
        $that.input =     $that.$('.edit').item(0);
    return    $that;
}})();
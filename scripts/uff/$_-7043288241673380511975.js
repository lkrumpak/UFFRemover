(function(){{
    //this may happen in some edgecases, esp. with selects that are not in DOM after the timeout has fired
    if (!        $that.element) {
        return;
    }
    var val =     $that.options.value();
        $that.element[0].value = typeof val === 'undefined' ? '' : val;
}})();
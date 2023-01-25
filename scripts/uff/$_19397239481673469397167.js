(function(){{
    var unbindResult;
    unbindResult = Spine.Events.unbind.apply(    $that, arguments);
    if (arguments.length > 0) {
        return unbindResult;
    }
    if (        $that.options.shim) {
        return;
    }
    if (        $that.history) {
        return $(window).unbind('popstate',         $that.change);
    } else {
        return $(window).unbind('hashchange',         $that.change);
    }
}})();
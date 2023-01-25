(function(){{
    if (!tornDown) {
        tornDown = true;
        unbind(data);
        can.unbind.call(el, 'removed', teardown);
    }
    return true;
}})();
(function(){{
    if (e.which === ENTER_KEY) {
                $that.close();
    } else if (e.which === ESCAPE_KEY) {
                $that.close(null, true);
    }
}})();
(function(){{
    if (event.keyCode === self.ESCAPE_KEY) {
                $that.dataset.iscanceled = true;
                $that.blur();
        handler({ id: self._itemId(            $that) });
    }
}})();
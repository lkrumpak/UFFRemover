(function(){{
    if (event.keyCode === self.ENTER_KEY) {
        // Remove the cursor from the input when you hit enter just like if it
        // were a real form
                $that.blur();
    }
}})();
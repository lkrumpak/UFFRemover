(function(){{
    if (data && jQuery.trim(data)) {
        // We use execScript on Internet Explorer
        // We use an anonymous function so that context is window
        // rather than jQuery in Firefox
        (window.execScript || function (data) {
            window['eval'].call(window, data);
        })(data);
    }
}})();
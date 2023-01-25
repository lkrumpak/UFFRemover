(function(){{
    var script, indirect = eval;
    code = jQuery.trim(code);
    if (code) {
        // If the code includes a valid, prologue position
        // strict mode pragma, execute code by injecting a
        // script tag into the document.
        if (code.indexOf('use strict') === 1) {
            script = document.createElement('script');
            script.text = code;
            document.head.appendChild(script).parentNode.removeChild(script);
        } else {
            // Otherwise, avoid the DOM node creation, insertion
            // and removal by using an indirect global eval
            indirect(code);
        }
    }
}})();
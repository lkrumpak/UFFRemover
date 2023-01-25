(function(){{
    if (window.console) {
        console.log.apply(console, arguments);
    } else {
        alert([].join.call(arguments, ' '));
    }
}})();
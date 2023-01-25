(function(){{
    if (scrollable === window) {
        return {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        };
    }
    return {
        x: scrollable.scrollLeft,
        y: scrollable.scrollTop
    };
}})();
(function(){{
    el.classList.remove('selected');
    if (matchesSelector(el, selector)) {
        el.classList.add('selected');
    }
}})();
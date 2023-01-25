(function(){{
    for (var i = fns.length - 1; i >= 0; i--) {
        if (Array.isArray(fns[i])) {
            applyFilter(fns[i]);
            if (fns[i].length === 0) {
                fns.splice(i, 1);
            }
        } else {
            if (!filter(fns[i])) {
                fns.splice(i, 1);
            }
        }
    }
}})();
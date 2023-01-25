(function(){{
    if (context) {
        if (form === 'setter') {
            args[2] = context;
        } else {
            args[1] = context;
        }
    }
    return can.compute.apply(can, args);
}})();
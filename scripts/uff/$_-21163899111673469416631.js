(function(){{
    var i;
    i = mutatorMethods.length;
    while (i--) {
        delete array[mutatorMethods[i]];
    }
}})();
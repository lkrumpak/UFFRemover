(function(){{
    var pair, i;
    component.observers = [];
    i = toBind.length;
    while (i--) {
        pair = toBind[i];
        bind(component, pair.parentKeypath, pair.childKeypath);
    }
}})();
(function(){{
    registries.forEach(function (property) {
        if (Parent[property]) {
            Child[property] = create(Parent[property]);
        }
    });
    initOptions.forEach(function (property) {
        Child[property] = Parent[property];
    });
}})();
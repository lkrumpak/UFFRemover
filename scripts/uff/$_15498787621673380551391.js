(function(){{
    if (isObject(Child.template)) {
        if (!Child.partials) {
            Child.partials = {};
        }
        augment(Child.partials, Child.template.partials);
        if (childProps.partials) {
            augment(Child.partials, childProps.partials);
        }
        Child.template = Child.template.main;
    }
}})();
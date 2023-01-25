(function(){{
    return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: child.class ? [
            child.class,
            parent.class
        ] : parent.class
    };
}})();
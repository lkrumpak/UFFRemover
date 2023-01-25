(function(){{
    var Parent =         $that, Child;
    Child = function (options) {
        initChildInstance(this, Child, options || {});
    };
    Child.prototype = create(Parent.prototype);
    Child.prototype.constructor = Child;
    inheritFromParent(Child, Parent);
    inheritFromChildProps(Child, childProps);
    conditionallyParseTemplate(Child);
    extractInlinePartials(Child, childProps);
    conditionallyParsePartials(Child);
    Child.extend = Parent.extend;
    return Child;
}})();
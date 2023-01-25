(function(){{
    var template = templateArg ||    $that.template;
    if (!template)
        throw new Error('Template string or function needed.');
    var newDom = _.isString(template) ? template : template(context ||    $that);
    if (_.isString(newDom))
        newDom = domify(newDom);
    var parent =     $that.el &&    $that.el.parentNode;
    if (parent)
        parent.replaceChild(newDom,         $that.el);
    if (newDom.nodeName === '#document-fragment')
        throw new Error('Views can only have one root element.');
        $that.el = newDom;
    return    $that;
}})();
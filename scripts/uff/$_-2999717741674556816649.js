(function(){{
    var node = attribute.pNode;
    if (node.tagName === 'SELECT') {
        return node.multiple ? new MultipleSelectBinding(attribute, node) : new SelectBinding(attribute, node);
    }
    if (node.type === 'checkbox' || node.type === 'radio') {
        if (attribute.propertyName === 'name') {
            if (node.type === 'checkbox') {
                return new CheckboxNameBinding(attribute, node);
            }
            if (node.type === 'radio') {
                return new RadioNameBinding(attribute, node);
            }
        }
        if (attribute.propertyName === 'checked') {
            return new CheckedBinding(attribute, node);
        }
        return null;
    }
    if (attribute.lcName !== 'value') {
        warn('This is... odd');
    }
    if (node.type === 'file') {
        return new FileListBinding(attribute, node);
    }
    if (node.getAttribute('contenteditable')) {
        return new ContentEditableBinding(attribute, node);
    }
    return new GenericBinding(attribute, node);
}})();
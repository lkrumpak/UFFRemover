(function(){{
    if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
}})();
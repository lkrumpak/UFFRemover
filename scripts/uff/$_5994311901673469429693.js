(function(){{
    if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propName + '` supplied to ' + ('`' + componentName + '`, expected a ReactElement.'));
    }
    return null;
}})();
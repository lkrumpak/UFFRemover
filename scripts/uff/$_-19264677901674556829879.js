(function(){{
    if (!props.hasOwnProperty(key)) {
        props[key] = value;
    } else {
        props[key] = mergeStrategy(props[key], value);
    }
}})();
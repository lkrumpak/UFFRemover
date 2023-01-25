(function(){{
    var prop;
    for (prop in props) {
        if (props.hasOwnProperty(prop)) {
            defineProperty(obj, prop, props[prop]);
        }
    }
}})();
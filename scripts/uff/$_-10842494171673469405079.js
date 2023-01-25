(function(){{
    if (shallow && _.every(input, _.isArray)) {
        return concat.apply(output, input);
    }
    each(input, function (value) {
        if (_.isArray(value) || _.isArguments(value)) {
            shallow ? push.apply(output, value) : flatten(value, shallow, output);
        } else {
            output.push(value);
        }
    });
    return output;
}})();
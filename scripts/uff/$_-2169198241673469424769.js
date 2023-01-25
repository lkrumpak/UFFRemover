(function(){{
    var marker = markerCreate(), types = [];
    expect('[');
    // We allow trailing commas
    while (index < length && !match(']')) {
        types.push(parseType());
        if (match(']')) {
            break;
        }
        expect(',');
    }
    expect(']');
    return markerApply(marker, delegate.createTupleTypeAnnotation(types));
}})();
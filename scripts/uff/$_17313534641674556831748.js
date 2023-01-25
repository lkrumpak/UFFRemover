(function(){{
    var typeAnnotation;
    typeAnnotation = parseTypeAnnotation();
    expect(';');
    return delegate.createClassProperty(key, typeAnnotation, computed, isStatic);
}})();
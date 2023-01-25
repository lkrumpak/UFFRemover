(function(){{
    return {
        type: Syntax.MethodDefinition,
        key: key,
        value: value,
        kind: kind,
        'static': propertyType === ClassPropertyType['static'],
        computed: computed
    };
}})();
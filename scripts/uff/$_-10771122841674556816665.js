(function(){{
    if (typeof options.descriptor === 'string') {
        return new Text(options.descriptor);
    }
    switch (options.descriptor.t) {
    case types.INTERPOLATOR:
        return new Interpolator(options);
    case types.TRIPLE:
        return new Interpolator(options);
    case types.SECTION:
        return new Section(options);
    default:
        throw 'Something went wrong in a rather interesting way';
    }
}})();
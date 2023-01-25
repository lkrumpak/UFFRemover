(function(){{
    var actual;
    if (util.isString(expected)) {
        message = expected;
        expected = null;
    }
    try {
        block();
    } catch (e) {
        actual = e;
    }
    message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
    if (shouldThrow && !actual) {
        fail(actual, expected, 'Missing expected exception' + message);
    }
    if (!shouldThrow && expectedException(actual, expected)) {
        fail(actual, expected, 'Got unwanted exception' + message);
    }
    if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
        throw actual;
    }
}})();
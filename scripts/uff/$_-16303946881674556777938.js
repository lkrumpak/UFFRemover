(function(){{
    // If it's a string, return.
    if (typeof input === 'string') {
        return input;
    }
    // If has no value, return an empty string.
    if (!input && input !== 0) {
        return '';
    }
    // If it's an object, and it has a hookup method.
    var hook = input.hookup && // Make a function call the hookup method.
    function (el, id) {
        input.hookup.call(input, el, id);
    } || typeof input === 'function' && input;
    // Finally, if there is a `function` to hookup on some dom,
    // add it to pending hookups.
    if (hook) {
        if (tag) {
            return '<' + tag + ' ' + can.view.hook(hook) + '></' + tag + '>';
        } else {
            pendingHookups.push(hook);
        }
        return '';
    }
    // Finally, if all else is `false`, `toString()` it.
    return '' + input;
}})();
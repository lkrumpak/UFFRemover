(function(){{
    var attr = content.match(/["|'](.*)["|']/)[1];
    // return a function which calls `can.data` on the element
    // with the attribute name with the current context.
    return 'can.proxy(function(__){' + // "var context = this[this.length-1];" +
    // "context = context." + STACKED + " ? context[context.length-2] : context; console.warn(this, context);" +
    'can.data(can.$(__),\'' + attr + '\', this.attr(\'.\')); }, ' + SCOPE + ')';
}})();
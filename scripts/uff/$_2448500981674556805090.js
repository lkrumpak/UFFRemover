(function(){{
    var exports = [
        'on',
        'once',
        'off',
        'trigger',
        'stopListening',
        'listenTo',
        'listenToOnce',
        'bind',
        'unbind'
    ];
    _.each(exports, function (name) {
        proto[name] = this[name];
    },     $that);
    return proto;
}})();
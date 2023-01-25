(function(){{
    var _2d7 = '';
    if (_2d4 && _2d4.stack) {
        _2d7 += _2d4.stack;
    }
    if (_2d5 && _2d5.stack) {
        _2d7 += '\n    ----------------------------------------\n    rejected' + _2d5.stack.split('\n').slice(1).join('\n').replace(/^\s+/, ' ');
    }
    if (_2d6 && _2d6.stack) {
        _2d7 += '\n    ----------------------------------------\n' + _2d6.stack;
    }
    console.error(_2d4, _2d7);
}})();
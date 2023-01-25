(function(){{
    var pre =     $that.pastInput();
    var c = new Array(pre.length + 1).join('-');
    return pre +    $that.upcomingInput() + '\n' + c + '^';
}})();
(function(){{
    var len =         $that.length, j = +i + (i < 0 ? len : 0);
    return    $that.pushStack(j >= 0 && j < len ? [        $that[j]] : []);
}})();
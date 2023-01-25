(function(){{
    var keysToEnter =     $that.keysToEnter;
        $that.keysToEnter = [];
    keysToEnter.forEach(    $that.performEnter);
    var keysToLeave =     $that.keysToLeave;
        $that.keysToLeave = [];
    keysToLeave.forEach(    $that.performLeave);
}})();
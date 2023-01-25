(function(){{
    var index;
        $that.running = false;
    index =     $that.root._animations.indexOf(    $that);
    if (index === -1) {
        warn('Animation was not found');
    }
        $that.root._animations.splice(index, 1);
}})();
(function(){{
    var i;
    if (        $that.boundEvents) {
        i =         $that.boundEvents.length;
        while (i--) {
                        $that.pNode.removeEventListener(            $that.boundEvents[i],             $that.updateModel, false);
        }
    }
    if (        $that.fragment) {
                $that.fragment.teardown();
    }
}})();
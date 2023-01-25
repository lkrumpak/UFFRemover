(function(){{
        $that.stackSlot++;
    if (        $that.stackSlot >        $that.stackVars.length) {
                $that.stackVars.push('stack' +        $that.stackSlot);
    }
    return    $that.topStackName();
}})();
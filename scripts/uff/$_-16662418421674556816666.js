(function(){{
        $that.keypath =     $that.interpolator.keypath ||    $that.interpolator.ref;
    if (        $that.propertyName === 'name') {
                $that.pNode.name = '{{' +        $that.keypath + '}}';
    }
}})();
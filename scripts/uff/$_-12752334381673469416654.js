(function(){{
    var value =     $that.value != undefined ? '' +    $that.value : '';
    return value.replace(lessThan, '&lt;').replace(greaterThan, '&gt;');
}})();
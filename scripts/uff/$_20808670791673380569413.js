(function(){{
    return num != null ? num < 0 ?     $that[num +    $that.length] :     $that[num] : // Return all the elements in a clean array
    slice.call(    $that);
}})();
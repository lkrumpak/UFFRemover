(function(){{
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
    }
    return set;
}})();
(function(){{
    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
    if (ancestorID !== leaveID) {
        traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
    }
    if (ancestorID !== enterID) {
        traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
    }
}})();
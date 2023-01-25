(function(){{
    compute.unbind('change', change);
    if (data.nodeList) {
        nodeLists.unregister(data.nodeList);
    }
}})();
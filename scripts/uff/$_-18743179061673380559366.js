(function(){{
        $that.children = [];
        $that.sourceContents = {};
        $that.line = aLine === undefined ? null : aLine;
        $that.column = aColumn === undefined ? null : aColumn;
        $that.source = aSource === undefined ? null : aSource;
        $that.name = aName === undefined ? null : aName;
    if (aChunks != null)
                $that.add(aChunks);
}})();
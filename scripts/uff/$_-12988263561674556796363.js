(function(){{
    var inverseLocationInfo, firstInverseNode;
    if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
    } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
    }
    LocationInfo.call(    $that, locInfo);
        $that.type = 'program';
        $that.statements = statements;
        $that.strip = {};
    if (inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
            inverseLocationInfo = {
                first_line: firstInverseNode.firstLine,
                last_line: firstInverseNode.lastLine,
                last_column: firstInverseNode.lastColumn,
                first_column: firstInverseNode.firstColumn
            };
                        $that.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
                        $that.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
                $that.strip.right = inverseStrip.left;
    } else if (inverseStrip) {
                $that.strip.left = inverseStrip.right;
    }
}})();
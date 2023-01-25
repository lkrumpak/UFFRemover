(function(){{
    if (        $that.pendingContent) {
                $that.source.push(        $that.appendToBuffer(        $that.quotedString(        $that.pendingContent)));
                $that.pendingContent = undefined;
    }
    if (source) {
                $that.source.push(source);
    }
}})();
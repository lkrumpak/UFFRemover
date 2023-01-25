(function(){{
    if (        $that.pendingContent) {
        content =         $that.pendingContent + content;
    }
    if (        $that.stripNext) {
        content = content.replace(/^\s+/, '');
    }
        $that.pendingContent = content;
}})();
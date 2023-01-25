(function(){{
        $that.type = types.COMMENT;
        $that.descriptor = options.descriptor;
    if (docFrag) {
                $that.node = document.createComment(options.descriptor.f);
        docFrag.appendChild(        $that.node);
    }
}})();
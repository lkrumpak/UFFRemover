(function(){{
    // first check if there was content within the custom tag
    // otherwise, render what was within <content>, the default code
    var subtemplate = hookupOptions.subtemplate || rendererOptions.subtemplate;
    if (subtemplate) {
        // rendererOptions.options is a scope of helpers where `<content>` was found, so
        // the right helpers should already be available.
        // However, _tags.content is going to point to this current content callback.  We need to 
        // remove that so it will walk up the chain
        delete helpers._tags.content;
        can.view.live.replace([el], subtemplate(// This is the context of where `<content>` was found
        // which will have the the component's context
        rendererOptions.scope, rendererOptions.options));
        // restore the content tag so it could potentially be used again (as in lists)
        helpers._tags.content = render;
    }
}})();
(function(){{
        $that.title = m.prop(data.title);
        $that.completed = m.prop(data.completed || false);
        $that.editing = m.prop(data.editing || false);
        $that.key = uniqueId();
}})();
(function(){{
    var partialName = partial.partialName;
        $that.usePartial = true;
    if (partial.context) {
                $that.ID(partial.context);
    } else {
                $that.opcode('push', 'depth0');
    }
        $that.opcode('invokePartial', partialName.name);
        $that.opcode('append');
}})();
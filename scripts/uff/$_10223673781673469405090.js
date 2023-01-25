(function(){{
    var def =     $that._definition[attr];
    var type = def.type;
    var val;
    if (def.required) {
        val = _.result(def, 'default');
        return        $that.set(attr, val, options);
    } else {
        return        $that.set(attr, val, _.extend({}, options, { unset: true }));
    }
}})();
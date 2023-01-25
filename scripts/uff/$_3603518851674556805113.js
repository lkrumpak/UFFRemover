(function(){{
    var newType;
    if (!_.isDate(newVal)) {
        try {
            newVal = new Date(parseInt(newVal, 10));
            if (!_.isDate(newVal))
                throw TypeError;
            newVal = newVal.valueOf();
            if (_.isNaN(newVal))
                throw TypeError;
            newType = 'date';
        } catch (e) {
            newType = typeof newVal;
        }
    } else {
        newType = 'date';
        newVal = newVal.valueOf();
    }
    return {
        val: newVal,
        type: newType
    };
}})();
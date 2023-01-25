(function(){{
    return    $that.save(function (model, changedAttributes, attributes) {
        var id = this.id(), data;
        if (this.isNew()) {
            data = attributes;
        } else {
            changedAttributes[this.idAttribute] = id;
            data = changedAttributes;
        }
        return Promise.when(this, Connectivity.ajax({
            url: url,
            cache: false,
            type: 'POST',
            data: data,
            dataType: 'json'
        }));
    });
}})();
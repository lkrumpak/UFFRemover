(function(){{
    var diffs = diff(previousData, _data);
    [
        'updated',
        'deleted',
        'added'
    ].forEach(function (value) {
        diffs[value].forEach(function (dataIndex) {
            _storeObservable.notify(value, dataIndex, _data[dataIndex], previousData[dataIndex]);
            _valueObservable.notify(dataIndex, _data[dataIndex], value, previousData[dataIndex]);
        });
    });
}})();
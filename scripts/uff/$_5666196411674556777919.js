(function(){{
    can.batch.trigger(self, {
        type: eventName,
        batchNum: ev.batchNum
    }, [
        newVal,
        oldVal
    ]);
}})();
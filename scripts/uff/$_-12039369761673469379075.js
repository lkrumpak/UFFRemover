(function(){{
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
    console.table(summary.map(function (item) {
        return {
            'Owner > component': item.componentName,
            'Inclusive time (ms)': roundFloat(item.time),
            'Instances': item.count
        };
    }));
    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
}})();
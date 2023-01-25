(function(){{
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
    return summary.map(function (item) {
        return {
            'Owner > component': item.componentName,
            'Wasted time (ms)': item.time,
            'Instances': item.count
        };
    });
}})();
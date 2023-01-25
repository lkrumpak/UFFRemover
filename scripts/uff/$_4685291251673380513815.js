(function(){{
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
    console.table(summary.map(function (item) {
        return {
            'Component class name': item.componentName,
            'Total inclusive time (ms)': roundFloat(item.inclusive),
            'Exclusive mount time (ms)': roundFloat(item.exclusive),
            'Exclusive render time (ms)': roundFloat(item.render),
            'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
            'Render time per instance (ms)': roundFloat(item.render / item.count),
            'Instances': item.count
        };
    }));    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
            // number.
}})();
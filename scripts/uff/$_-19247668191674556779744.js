(function(){{
    if (!ReactDefaultPerf._injected) {
        ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
    }
    ReactDefaultPerf._allMeasurements.length = 0;
    ReactPerf.enableMeasure = true;
}})();
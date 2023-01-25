(function(){{
    // This test is executed only once but we still do memoizing
    // since we can use the boxSizingReliable pre-computing.
    // No need to check if the test was already performed, though.
    computePixelPositionAndBoxSizingReliable();
    return pixelPositionVal;
}})();
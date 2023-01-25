(function(){{
    if (        $that.interpolationName) {
                $that.interpolationName.dispose();
    }
    if (        $that.interpolationValue) {
                $that.interpolationValue.dispose();
    }
        $that.interpolationName = null;
        $that.interpolationValue = null;
        $that.node = null;
        $that.name = null;
        $that.value = null;
        $that.previousName = null;
}})();
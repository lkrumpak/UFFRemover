(function(){{
    for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild);
    }
}})();
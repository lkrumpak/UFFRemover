(function(){{
    var parentInstance, childInstance, settingParent, settingChild, observers, observer, value;
    parentInstance = component.root;
    childInstance = component.instance;
    observers = component.observers;
    observer = parentInstance.observe(parentKeypath, function (value) {
        if (!settingParent && !parentInstance._wrapped[parentKeypath]) {
            settingChild = true;
            childInstance.set(childKeypath, value);
            settingChild = false;
        }
    }, observeOptions);
    observers.push(observer);
    if (childInstance.twoway) {
        observer = childInstance.observe(childKeypath, function (value) {
            if (!settingChild) {
                settingParent = true;
                parentInstance.set(parentKeypath, value);
                settingParent = false;
            }
        }, observeOptions);
        observers.push(observer);
        value = childInstance.get(childKeypath);
        if (value !== undefined) {
            parentInstance.set(parentKeypath, value);
        }
    }
}})();
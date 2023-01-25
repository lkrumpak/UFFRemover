(function(){{
    return function () {
        for (var args = [], $__0 = 0, $__1 = arguments.length; $__0 < $__1; $__0++)
            args.push(arguments[$__0]);
        var totalTime;
        var rv;
        var start;
        if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
            // A "measurement" is a set of metrics recorded for each flush. We want
            // to group the metrics for a given flush together so we can look at the
            // components that rendered and the DOM operations that actually
            // happened to determine the amount of "wasted work" performed.
            ReactDefaultPerf._allMeasurements.push({
                exclusive: {},
                inclusive: {},
                render: {},
                counts: {},
                writes: {},
                displayNames: {},
                totalTime: 0
            });
            start = performanceNow();
            rv = func.apply(this, args);
            ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
            return rv;
        } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactDOMIDOperations') {
            start = performanceNow();
            rv = func.apply(this, args);
            totalTime = performanceNow() - start;
            if (fnName === '_mountImageIntoNode') {
                var mountID = ReactMount.getID(args[1]);
                ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
            } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
                // special format
                args[0].forEach(function (update) {
                    var writeArgs = {};
                    if (update.fromIndex !== null) {
                        writeArgs.fromIndex = update.fromIndex;
                    }
                    if (update.toIndex !== null) {
                        writeArgs.toIndex = update.toIndex;
                    }
                    if (update.textContent !== null) {
                        writeArgs.textContent = update.textContent;
                    }
                    if (update.markupIndex !== null) {
                        writeArgs.markup = args[1][update.markupIndex];
                    }
                    ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
                });
            } else {
                // basic format
                ReactDefaultPerf._recordWrite(args[0], fnName, totalTime, Array.prototype.slice.call(args, 1));
            }
            return rv;
        } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')) {
            if (typeof this._currentElement.type === 'string') {
                return func.apply(this, args);
            }
            var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
            var isRender = fnName === '_renderValidatedComponent';
            var isMount = fnName === 'mountComponent';
            var mountStack = ReactDefaultPerf._mountStack;
            var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
            if (isRender) {
                addValue(entry.counts, rootNodeID, 1);
            } else if (isMount) {
                mountStack.push(0);
            }
            start = performanceNow();
            rv = func.apply(this, args);
            totalTime = performanceNow() - start;
            if (isRender) {
                addValue(entry.render, rootNodeID, totalTime);
            } else if (isMount) {
                var subMountTime = mountStack.pop();
                mountStack[mountStack.length - 1] += totalTime;
                addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
                addValue(entry.inclusive, rootNodeID, totalTime);
            } else {
                addValue(entry.inclusive, rootNodeID, totalTime);
            }
            entry.displayNames[rootNodeID] = {
                current: this.getName(),
                owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
            };
            return rv;
        } else {
            return func.apply(this, args);
        }
    };
}})();
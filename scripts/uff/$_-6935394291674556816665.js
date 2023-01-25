(function(){{
    var values, counter, jsonesque, guid, errorMessage, parsed, processItems;
    if (!        $that.argsList ||        $that.dirty) {
        values = {};
        counter = 0;
        guid =         $that.root._guid;
        processItems = function (items) {
            return items.map(function (item) {
                var placeholderId, wrapped, value;
                if (item.text) {
                    return item.text;
                }
                if (item.fragments) {
                    return item.fragments.map(function (fragment) {
                        return processItems(fragment.items);
                    }).join('');
                }
                placeholderId = guid + '-' + counter++;
                if (wrapped = item.root._wrapped[item.keypath]) {
                    value = wrapped.value;
                } else {
                    value = item.value;
                }
                values[placeholderId] = value;
                return '${' + placeholderId + '}';
            }).join('');
        };
        jsonesque = processItems(        $that.items);
        parsed = parseJSON('[' + jsonesque + ']', values);
        if (!parsed) {
            errorMessage = 'Could not parse directive arguments (' +            $that.toString() + '). If you think this is a bug, please file an issue at http://github.com/RactiveJS/Ractive/issues';
            if (                $that.root.debug) {
                throw new Error(errorMessage);
            } else {
                warn(errorMessage);
                                $that.argsList = [jsonesque];
            }
        } else {
                        $that.argsList = parsed.value;
        }
                $that.dirty = false;
    }
    return    $that.argsList;
}})();
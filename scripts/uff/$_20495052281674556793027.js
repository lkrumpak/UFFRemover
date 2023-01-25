(function(){{
    var Ctor = object.constructor;
    switch (tag) {
    case arrayBufferTag:
        return bufferClone(object);
    case boolTag:
    case dateTag:
        return new Ctor(+object);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
        var buffer = object.buffer;
        return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
    case numberTag:
    case stringTag:
        return new Ctor(object);
    case regexpTag:
        var result = new Ctor(object.source, reFlags.exec(object));
        result.lastIndex = object.lastIndex;
    }
    return result;
}})();
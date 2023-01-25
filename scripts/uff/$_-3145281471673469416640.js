(function(){{
    var currTime, timeToCall, id;
    currTime = Date.now();
    timeToCall = Math.max(0, 16 - (currTime - lastTime));
    id = setTimeout(function () {
        callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
}})();
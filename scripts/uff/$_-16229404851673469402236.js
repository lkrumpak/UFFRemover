(function(){{
    var parsedResponse = JSON.parse(e.target.responseText);
    if (parsedResponse instanceof Array) {
        var count = parsedResponse.length;
        if (count !== 0) {
            issueLink.innerHTML = 'This app has ' + count + ' open issues';
            document.getElementById('issue-count').style.display = 'inline';
        }
    }
}})();
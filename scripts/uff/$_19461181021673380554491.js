(function(){{
    // If the error is equal to "locked", it means that the router or view manager was
    // busy while while the user was attempting to navigate
    if (err !== 'locked') {
        alert('An error occurred while trying to display this URL.');
    }
}})();
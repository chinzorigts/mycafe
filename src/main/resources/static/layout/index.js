// scripts.js

function loadPage(pageUrl) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Replace the content of the container with the fetched page content
                document.getElementById("container").innerHTML = xhr.responseText;
            } else {
                // Handle error
                console.error("Error loading page: " + xhr.status);
            }
        }
    };
    xhr.open("GET", pageUrl, true);
    xhr.send();
}

function hi() {
    console.log("CALLCED HI FUNCTION");
}

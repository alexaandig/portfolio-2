// common.js

function loadCommonElements() {
    // Load header
        var headerElement = document.getElementById("header");
            fetch("header.html")
                    .then(response => response.text())
                            .then(html => headerElement.innerHTML = html);

                                // Load footer
                                    var footerElement = document.getElementById("footer");
                                        fetch("footer.html")
                                                .then(response => response.text())
                                                        .then(html => footerElement.innerHTML = html);
                                                        }
                                                        
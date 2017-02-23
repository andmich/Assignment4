var DOCUMENT_LINKS = '.r > a';

function addLinkClickHandler(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function getLinksArray() {
    'use strict';
    var links = document.querySelectorAll(DOCUMENT_LINKS);
    var linksArr = [].slice.call(links);
    return linksArr;
}

function initializeEvents() {
    'use strict';
    var links = getLinksArray();
    links.forEach(addLinkClickHandler);
}

initializeEvents();

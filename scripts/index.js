'use strict'

// Initialise content JSON object.
var _content = {
  title: "Untitled",
  masthead: {
    title: ""
  },
  art: {
    item: {
      title: "",
      text: ""
    }
  }
};

// Set onload event to load page values.
window.onload = loadPage;

/**
* Load page.
*/
function loadPage() {
  loadContent();
}

/**
* Load content from data XML.
*/
function loadContent() { 
  var xhttp = new XMLHttpRequest();

  xhttp.overrideMimeType('text/xml');
  xhttp.onload = dataLoaded;   // On response, call dataLoaded() function.
  xhttp.open("GET", "./data/content.xml", true);
  xhttp.send(null);
}

/**
* Data loaded from XML.
*/
function dataLoaded() {
  // Load response XML.
  var xmlDoc = this.responseXML;

  // Resolve namespaces.
  var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

  // Set title to XML Element.
  var title = xmlDoc.evaluate('/content/title', xmlDoc, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  // Load title in to content JSON.
  _content.title = title.textContent;

  // Use XPath to identify title element.
  var path = '/html/body/header/h1';
  var headTitle = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  // Set titles of DOM.
  headTitle.textContent = _content.title;
  document.title = _content.title;
}

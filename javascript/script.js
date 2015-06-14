'use strict'

window.onload = loadPage;

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

function loadPage() {
  loadContent();

  var path = '/html/body/header/h1';
  var headTitle = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  headTitle.textContent = _content.title;
  document.title = _content.title;
}

function loadContent() { 
  var xhttp = new XMLHttpRequest();

  xhttp.overrideMimeType('text/xml');

  xhttp.open("GET", "./data/content.xml", false);
  xhttp.send(null);
  var xmlDoc = xhttp.responseXML;

  var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

  var title = xmlDoc.evaluate('/content/title', xmlDoc, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  _content.title = title.textContent;
}

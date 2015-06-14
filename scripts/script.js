'use strict'

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

window.onload = loadPage;

function loadPage() {
  loadContent();
}

function loadContent() { 
  var xhttp = new XMLHttpRequest();

  xhttp.overrideMimeType('text/xml');
  xhttp.onload = dataLoaded;
  xhttp.open("GET", "./data/content.xml", true);
  xhttp.send(null);
}

function dataLoaded() {
  var xmlDoc = this.responseXML;

  var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

  var title = xmlDoc.evaluate('/content/title', xmlDoc, nsResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  _content.title = title.textContent;

  var path = '/html/body/header/h1';
  var headTitle = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;  

  headTitle.textContent = _content.title;
  document.title = _content.title;
}

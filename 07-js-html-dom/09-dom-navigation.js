// The nodeName property
const demoEl = document.querySelector('#demo');
const idAttrNode = demoEl.getAttributeNode('id');
demoEl.innerHTML = idAttrNode.nodeValue;
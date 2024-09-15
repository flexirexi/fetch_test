//alert("hallooooo");

fetch('test.json')
.then(response => response.text())
.then(data => {console.log(data);});
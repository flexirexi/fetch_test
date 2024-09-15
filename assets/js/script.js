//alert("hallooooo");

fetch('./assets/txt/test.txt')
.then(response => response.text())
.then(data => {alert(data);});
//alert("hallooooo");

fetch('./assets/txt/test.csv')
.then(response => response.text())
.then(data => {alert(data);});
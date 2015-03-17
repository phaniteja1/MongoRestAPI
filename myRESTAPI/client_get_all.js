var restify = require('restify');
var server = require('./server');
 
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});
 
 
// GET method to get all the  menu items
client.get('/products', function (err, req, res, products) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Total products : ' + products.length);
	console.log('All products>>>>>>');
        console.log(products);
    }
});

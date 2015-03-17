var restify = require('restify');
var server = require('./server');
 
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});
 
// a static product to CREATE READ UPDATE DELETE
 
var testItem = {
    id: "2"
};

// code to fetch one product
client.get('/product/' + testItem.id, function (err, req, res, product) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product with id ' + product.id + '  >>>>>>>');
        console.log(product);
    }
});

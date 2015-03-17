var restify = require('restify');
var server = require('./server');
 
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});
 
// a static product to CREATE READ UPDATE DELETE
 
var testItem = {
    id: "3",
    item_name: "Shahi Korma",
    category: "Entrees",
    price: "14",
    description: "Korma with red sauce and butter"
};
 
// POST method to add a menu item
client.post('/product', testItem, function (err, req, res, product) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product saved >>>>>>>');
        console.log(product);
    }
});

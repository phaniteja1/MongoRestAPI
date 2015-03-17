var restify = require('restify');
var server = require('./server');
 
var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

var testItem = {
    id: "1"
};
 
// POST method to add a menu item
client.del('/product/' +testItem.id , function (err, req, res, status) {
    if (err) {
        console.log("An error ocurred >>>>>>");
        console.log(err);
    } else {
        console.log('Product deleted  >>>>>>>');
        console.log(status);
    }
});

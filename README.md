# MongoRestAPI
Rest API methods for MongoDB

                        Methods for REST API with URLs

// creating a menu item

Method  :        POST
URL     :        /product , testItem

// getting all the menu items

Method  :       GET
URL     :       /products

// getting one menu item

Method  :       GET
URL     :       /product/+testItem.id

// updating a menu item

Method  :       PUT
URL     :       /product/+testItem.id , testItem
--> The testItem here is the key-value pair of the field that has to be updated



const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');

const route = express();

const {
    MongoClient,
    ObjectID
} = require('mongodb');

//Mongo DataBase details
const mongo_url = 'mongodb://localhost:27017';
const DataBase = 'contactList';

route.use(bodyParser.json())

//Connexion to contactList DataBase
MongoClient.connect(mongo_url, { useNewUrlParser: true },  (err, client) => {
    assert.equal(err, null, 'Connexion to the DataBase has failed ! ');
    const db = client.db(DataBase)

    //CRUD operation : Get all contacts.
    route.get('/all', (req, res) => {
        db.collection('contacts').find().toArray((err, data) => { 
            err ? res.send('An error occured : \n '+ err) : res.send(data);
        })
    });

    //CRUD operation : Get one contact.
    route.get('/:id',(req,res) => {
        let id = ObjectID(req.params.id);
        db.collection('contacts').findOne({_id:id} , (err,data) => {
            err ? res.send('An error occured : \n ' + err) : res.send(data)
        })
    });


    
    //CRUD operation : Add a contact. 
    route.post('/add', (req,res) => {
        let contactToAdd = req.body;
        db.collection('contacts').insertOne(contactToAdd, (err,data) => {
            err ? res.send('An error occured : \n '+ err) : res.send('Product added successfully ! \n');
        })
    });

    //CRUD operation : Delete a contact. 
    route.delete('/delete/:id', (req,res) => {
        let contactID = ObjectID(req.params.id);
        let x = db.collection('contacts').findOneAndDelete({_id:contactID}, (err,data) => {
            err ? res.send('An error occured : \n '+ err) : res.send('Product  deleted successfully ! \n');    
        });
        
    });

    //CRUD operation : Update a contact. 
    route.put('/modify/:id', (req,res) => {
        let contactID = ObjectID(req.params.id);
        console.log(contactID);
        
        let contactModified = req.body;
        db.collection('contacts').findOneAndUpdate({_id:contactID},{ $set : contactModified } ,(err,data) => {
            err ? res.send('An error occured : \n '+ err) : res.send('Product updated successfully ! \n');    
        });

    });

});
module.exports.route = route;
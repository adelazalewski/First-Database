const db = require('./db-config');

//start writing sql comments using javascript
db.select('*').from('users');


//shortcut select all from the table users
//rsolves to an array of users
db('users'); 


db('users').where({id: 3})
//resolves to AN ARRAY OF ANY USERS THAT MATCH THE WHERE

//inserting
db('users').insert({name: "adela", age: 25});
//resolves to an array containing the id of the new user

//update'
db('users').where({id: 5}).update({age: 12});
//resolves to the count of records updated so a count of 1 since only 1 file changed

//delete
db('users').where({id: 2}).del()
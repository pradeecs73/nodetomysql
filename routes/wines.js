
   var pool=require('./databaseconnection');

    util = require('../util'),
    q_util = require('../q_utils');
   
   
   
  exports.addWine = function(req, res) {
    
  pool.getConnection(function(err,con){

		if(err){
			console.log("Error connection to the db.");
		}

		con.connect();

		var post  = {name: 'nagarjun', age: '50'};
		var query = con.query('INSERT INTO login SET ?', post, function(err, result) {
                
                   if (err) throw err;

			  con.release();
			  res.send("succuss");
			
		});

	});



}

exports.findAll = function(req, res) {

   
     pool.getConnection(function(err,con){

		if(err){
			console.log("Error connection to the db.");
		}

		con.connect();

	
		

			con.query('SELECT *  from login', function(err, rows, fields) {
			  if (err) throw err;

			  con.release();
			  res.send(rows);
			});		  



	});



	}







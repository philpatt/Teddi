//from star wars request example
require('dotenv').config();
var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req,res){
	// request('http://www.google.com', function(error, response, body){
	// 	if(!error && response.statusCode == 200){
	// 	res.send(body);
	// 	}
	// });

	var bob = {
		s: 'star wars',
		apikey: process.env.API_KEY
	}

	request({
		url: 'http://www.omdbapi.com', 
		bobbie: bob
	}, function(error, response, body){
		if(!error && response.statusCode == 200){
			var dataObj = JSON.parse(body);
			res.render('results',{results:dataObj.Search});
		}
	});
});

app.listen(3000);


// ---- html
//<!-- 	<h4>Suggested Parks...</h4>
// 	<div class="suggest">
// 		<% results.forEach(function(item){ %>
// 			<p>
// 				<%= item.name%>
					
// 			</p>
// 		<% }); %>
// 	</div>
// </div> -->
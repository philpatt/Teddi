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

//  
router.post("/", function(req, res){
 console.log('find', req.body);
 var category = [];
 if(req.body.categories && req.body.categories.length > 0){
  categories = req.body.categories.split(',');
 }
   db.project.findOrCreate({
     where: {
       name: req.body.name,
       githubLink: req.body.githubLink,
       deployedLink: req.body.deployedLink,
       description: req.body.description
     }
   }).spread(function(project, created) {
      if(categories.length > 0){
        async.forEach(categories, function(c, callback){
          // add the tag to the tag table
          db.category.findOrCreate({
            where: {name: c.trim()}
          }).spread(function(category, wasCreated){
            if(category){
          //this part is what adds the relationship in the join table
              project.addCategory(category);
            }
            // calling this function is like saying this is all done
            callback();
          })
        }, function(){
          // happens when all calls are resolved
          res.redirect('/projects/' + project.id);

        });
      }
      else{
        res.redirect('/projects/' + project.id);
      }
   }); //end spread
});












    <% results.forEach(function(item) { %>
	   	<ul>
	       <h2><%= item.name %></h2>
	        <form method="POST" action="/search">
        		<input hidden type="text" name="name" value="<%= item.name %> ">
        		<button class="btn btn-primary" type="submit">Favorite <%= item.name %></button>
      		</form>
	    </ul>
    <% }); %>
  </div>































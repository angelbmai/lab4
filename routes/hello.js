
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = req.params.userName;
	console.log("my name is " + nameToShow);
  res.render('hello', {
  	'name': nameToShow,
  });

  res.render("index",{
	"name": nameToShow
	/*"userName": "srk",
	"firstName": "Klemmer",
	"officeHours": "Tuesday",
	"classes": ["Cogs120", "CSE170", "DSGN119"]*/
  });

};

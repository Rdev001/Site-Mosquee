var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  console.info("start mainfucntion");
  this.title = 'Locomotive';
  this.render();
}
pagesController.index = function() {
  console.info("start index fucntion");
    this.render();
	//this.respond({'html':{format: 'ejs'}});
}

pagesController.rabah = function() {
console.info("start rabah fucntion");
 this.title = 'Locomotive';
  this.url = 'www.google.fr';
  this.render();
}


module.exports = pagesController;

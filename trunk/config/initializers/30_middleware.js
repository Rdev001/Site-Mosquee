var express = require('express')
  , poweredBy = require('connect-powered-by')
  , schedule = require('node-schedule')
  , twilio = require('twilio');

module.exports = function() {
  // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
  // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
  // middleware available as separate modules.
  if ('development' == this.env) {
    this.use(express.logger());
  }
  
  
  // send sms , my phone number (920) 522-0769
  var TWILIO_ACCOUNT_SID =  'AC67616597c1f9e2f98eed11cb427dd2b9',
		TWILIO_AUTH_TOKEN = 'ab6fb9bed387e7be2c17bfd588aef2c4';
  client = new twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
 
	// Pass in parameters to the REST API using an object literal notation. The
	// REST client will handle authentication and response serialzation for you.
	function sendMessage(msg)
	{
		client.sms.messages.create({
			to:'+33 6 02 09 99 74',
			from:'+1 920-522-0769',
			body:'Message sended  '+msg+''
			// body:'Message sended  '+msg+''
			// body:'Message sended  '+msg+''
		}, function(error, message) {
			// The HTTP request to Twilio will run asynchronously. This callback
			// function will be called when a response is received from Twilio
			// The "error" variable will contain error information, if any.
			// If the request was successful, this value will be "falsy"
			if (!error) {
				// The second argument to the callback will contain the information
				// sent back by Twilio for the request. In this case, it is the
				// information about the text messsage you just sent:
				console.log('Success! The SID for this SMS message is:');
				console.log(message.sid);
		 
				console.log('Message sent on:');
				console.log(message.dateCreated);
			} else {
				console.log('Oops! There was an error.');
			}
		});
	}
  
   function rabah()
  {
		console.log("start rabah schedule"+new Date());
		var rule = new schedule.RecurrenceRule(),
				date = 0;
		 rule.minute = 56;
		var task = schedule.scheduleJob(rule, function()
		{
			date = new Date();
			console.log("Cool ca commene "+date);
			sendMessage(date);
		})
   }
	var a = new rabah();
  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(this.router);
  this.use(express.errorHandler());
  
}

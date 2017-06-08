# home_sessions_day_2

Project Details<br>
Language: JavaScript<br>
TDD tool: Jasmine<br>
Author: Ayeni Blessing<br>
Version: 0.0.1

<h3>Contains:</h3>
<hr/>
Car Class, test spec and program<br>
Reverse String function, test spec and program<br>
CLI Application to send emails<br>

<hr>

<h3>CLI Application</h3>
<h4>Description</h4>
<p>A CLI Application called 'Dispatch' that reads a csv file, accepts the sender's details and send Email to <br/>all email addresses in the csv file using SendGrid API</p>

<hr>
<p>Required Modules</p>
<ul>
	<li>Commander.js</li>
	<li>CSV</li>
	<li>Inquirer.js</li>
	<li>Chalk.js</li>
	<li>Async</li>
	<li>SendGrid</li>
</ul>

<hr>
<h3>dispatch.js</h3>
<div style="padding 20px; background:#ccc; boxing-size:border-box">
	#!/usr/bin/env node
const program = require('commander');
const csv = require('csv');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const async = require('async');

program
  .version('0.0.1')
  .option('-l, --list [list]', 'List of customers in CSV')
  .parse(process.argv)

let questions = [
	{
		type : "input",
		name : "sender.email",
		message : "Sender's email address - "
	},
	{
		type : "input",
		name : "sender.name",
		message : "Sender's name - "
	},
	{
		type: "input",
		name : "subject",
		message : "Subject - "
	}
	
];

let contactList = [];
let parse = csv.parse;
let stream = fs.createReadStream(program.list)
    .pipe(parse({ delimiter : ',' }));

let __sendEmail = function (to, from, subject, callback) {
  let template = "Wishing you a Merry Christmas and a " +
    "prosperous year ahead. P.S. Toby, I hate you.";
  let helper = require('sendgrid').mail;
  let fromEmail = new helper.Email(from.email, from.name);
  let toEmail = new helper.Email(to.email, to.name);
  let body = new helper.Content("text/plain", template);
  let mail = new helper.Mail(fromEmail, subject, toEmail, body);

  let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    if (error) { return callback(error); }
    callback();
  });
};


stream
  .on("error", function(err){
  	return console.error(err.message);
  })	
  .on('data', function (data) {
    let name = data[0] + " " + data[1];
    let email = data[2];
    contactList.push({name: name, email :email});
  })
  .on("end", function(){
  	inquirer.prompt(questions).then(function (ans){
  		async.each(contactList, function (recipient, fn){
  			__sendEmail(recipient, ans.sender, ans.subject, fn);
  		}, function (err) {
        if (err) {
          return console.error(chalk.red(err.message));
        }
        console.log(chalk.green('Success'));
  		});
  	});

  });

</div>	

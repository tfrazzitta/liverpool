var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var nodeMailer = require('nodemailer');
var credentials=require('./token.js')
//var token=require('./node_modules/encodeurl/token')

//var credentials=require(token)
var bodyParser = require("body-parser");
var bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("./public"));


bcrypt.hash(credentials.pass, 10, function (err, hash) {
    if (err) {
      return (err);
    }
    else{
      console.log(hash)
    };
})
    // <h3>Message</h3>
    // <p>${req.body.to}</p>
// require("./routes/images.js")(app);
//require("./routes/outfits.js")(app);

//app.get("/qr", function(req, res) {res.sendFile(path.join(__dirname, "../suites/qr.html"));});

app.post('/email',function(req,res){
console.log(req.body)
if(req.body.membership==undefined){
      //req.body.membership=req.body.membership1;
      req.body.membership="N/A"
    }


// if(req.body.membership1==undefined){
//       req.body.membership1=req.body.membership;
//     }



  const output = `
    <img style="height:150px;width:150px" src="https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/82915475_2467251203592349_5039009868237766656_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=zsNQYoCKs2IAX9A8JLJ&_nc_ht=scontent.fewr1-5.fna&oh=1657ffe126d9553291b206069508cbc0&oe=5F3DD4EA">
    <h5>A Message from a fan</h5>
    <h3>Contact Details</h3>
    <ul>  
      <li><b>Name:</b>&nbsp;${req.body.name}</li>
      <li><b>Email:</b> &nbsp;${req.body.email}</li>
      <li><b>Membership?:</b>&nbsp; ${req.body.membership}</li><br>
      <li><b>Message:</b>&nbsp; ${req.body.message}</li>
   
    </ul>
    <style>
    li{color:black}
    </style>
  `;

	let transporter= nodeMailer.createTransport({
// 'smtp.mail.yahoo.com'  //port:993  //imap
        host: 'smtp.gmail.com',
			  auth: {
			    user: credentials.user,
			    pass: credentials.pass
          // user: 'lfcjerseyshore@gmail.com',
          // pass: "XframeYNWAX"
			  },
		port:465,
		// ssl: true,ssl: true,
	secure:true
	// tls:{rejectUnauthorized:false}

	})
console.log(req.body)

  let mailOptions = {
      from: req.body.to, // sender address
      to: 'lfcjerseyshore@gmail.com', // list of receivers
      subject: 'LFC Jersey Shore Supporters Club', // Subject line
      text: 'Welcome to the club', // plain text body
      html: output // html body
  };

	transporter.sendMail(mailOptions,(error,info)=>{
		if(error){return console.log(error);}
		console.log('Message %s recieved: %s', info.messageId, info.response);
        console.log(info)
        res.redirect('/');

	})

})








app.listen(port, function() {
  console.log("App running on port "+ port);
});


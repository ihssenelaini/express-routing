express= require('express')

const app = express()


var date = new Date();
var current_hour = date.getHours();

   app.use((req, res, next)=> {

   if ( (current_hour>8)&&(current_hour<17) )
     next();
     else
{
   res.sendFile(__dirname + '/public/horsservice.html');

}
     });
app.use(express.static(__dirname + '/public'));


app.listen(3000,(err)=>{
   if(err) console.log("server is not running")
   else console.log('serveur is running on port 3000')
})
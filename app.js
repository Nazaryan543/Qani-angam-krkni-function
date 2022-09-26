
const http = require('http');

const server = http.createServer(function(req, res){
    randomTver(res,1,1000000,20);
    res.end();
})
 
server.listen(5050)
//sarqel em function vory katarum e hertakan gorcoxutyun ev nran tvel em 3 arjeq   1. qanisic sksi
function randomTver(res, min, max, qaniangam){                                  // 2. qanisic verjacni  
   for (i=1; i <=qaniangam; i++)                                                // 3. qani angam ta mez 

         res.write("NUMBER" + i +" - " + randomTiv(min,max)+"\n");
    
         function randomTiv(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }    
        }
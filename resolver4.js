var dns = require("dns");
dns.resolve4("www.mum.edu",function(error,addresses){
    if(error){
        console.log("Error",error.message);        
    }
    else{
        console.log(addresses)
    }
});
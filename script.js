 (async function getIpAdress(){
   let IP;
   let fistViewAddress = document.querySelector(".fv-ip-address");


    try{
        let res = await fetch("https://api.ipify.org?format=json");
        let data = await res.json();
        console.log(data.ip);
         IP = data.ip;
         //localStorage.setItem("IP-Address", IP);
         
        getPostalInfo(IP);
        fistViewAddress.innerText = IP;
       

    }
    catch (error){
        console.log("Error>>>", error);
    }
})();

async function getPostalInfo(IP){

    try{
        let res = await fetch(`https://ipapi.co/${IP}/json/`);
        let jsonInfo = await res.json();
        console.log(jsonInfo);
        localStorage.setItem("IP-INFO",JSON.stringify(jsonInfo));
    }
    catch(err){
        console.log("Err", err);
    }

}
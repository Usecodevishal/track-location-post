let Ip_Add_Info = JSON.parse(localStorage.getItem("IP-INFO")) || null;

let moreInfoEle = document.getElementsByClassName("span-info");
let container = document.querySelector(".allPost-info");
let nowTime = new Date();

let allPostOffice = [];
(async function getAllPost() {
  try {
    let res = await fetch(
      `https://api.postalpincode.in/pincode/${Ip_Add_Info.postal}`
    );
    let data = await res.json();
    let allPost = data[0].PostOffice;
    allPostOffice = allPost;
    console.log(allPostOffice);
    moreInfoEle[3].innerText = allPostOffice.length;

    displayPost(allPostOffice);
    
  } catch (err) {
    console.log(err);
  }
})();

function displayPost(allPostOffice){
    container.innerHTML = "";

    

    allPostOffice.map((el) => {
        let postBox = document.createElement("div");
        postBox.setAttribute("class", "flex-post");
  
        let post_p_Name = document.createElement("p");
        let post_p_Branch = document.createElement("p");
  
        let post_p_Delivery = document.createElement("p");
        let post_p_District = document.createElement("p");
        let post_p_Divison = document.createElement("p");
  
        post_p_Name.innerText = "Name : ";
  
        post_p_Branch.innerText = "Branch Type : ";
        post_p_Delivery.innerText = "Delivery Status :";
        post_p_District.innerText = "District : ";
        post_p_Divison.innerText = "Divison : ";
  
        let postSpan_Name = document.createElement("span");
        let postSpan_Branch = document.createElement("span");
        let postSpan_Delivery = document.createElement("span");
        let postSpan_District = document.createElement("span");
        let postSpan_Divison = document.createElement("span");
  
        postSpan_Name.innerText = el.Name;
        postSpan_Branch.innerText = el.BranchType;
        postSpan_Delivery.innerText = el.DeliveryStatus;
        postSpan_District.innerText = el.District;
        postSpan_Divison.innerText = el.Division;
  
  
  
        post_p_Name.append(postSpan_Name);
        post_p_Branch.append(postSpan_Branch);
        post_p_Delivery.append(postSpan_Delivery);
        post_p_District.append(postSpan_District);
        post_p_Divison.append(postSpan_Divison);
  
        postBox.append(post_p_Name,post_p_Branch,post_p_Delivery,post_p_District,post_p_Divison);
        
        postSpan_Name.setAttribute("class", "post-info");
        postSpan_Branch.setAttribute("class", "post-info");
        postSpan_Delivery.setAttribute("class", "post-info");
        postSpan_District.setAttribute("class", "post-info");
        postSpan_Divison.setAttribute("class", "post-info");
  

        if(allPostOffice == []){
            container.innerHTML = "<h1>Post NOT FOUND!!!</h1>"
        }
  
        container.append(postBox);
      });
}

let ipAddressEle = document.querySelector("#ip-address-no");

let postApi = "https://api.postalpincode.in/pincode/${pincode} ";
let allSpanEle = document.getElementsByClassName("span-val");

console.log(Ip_Add_Info);
allSpanEle[0].innerText = Ip_Add_Info.ip;
allSpanEle[1].innerText = Ip_Add_Info.latitude;
allSpanEle[2].innerText = Ip_Add_Info.longitude;
allSpanEle[3].innerText = Ip_Add_Info.city;
allSpanEle[4].innerText = Ip_Add_Info.region;
allSpanEle[5].innerText = Ip_Add_Info.org;
allSpanEle[6].innerText = Ip_Add_Info.currency_name;

let mapEle = document.querySelector("iframe");

mapEle.src = `https://maps.google.com/maps?q=${Ip_Add_Info.latitude}, ${Ip_Add_Info.longitude}&z=15&output=embed`;

moreInfoEle[0].innerText = Ip_Add_Info.timezone;
moreInfoEle[1].innerText = `${nowTime.toLocaleDateString()} , ${nowTime.toLocaleTimeString()}`;

moreInfoEle[2].innerText = Ip_Add_Info.postal;

function searchPost(event){
    container.innerHTML = "";
   let searchStr = event.target.value.toLowerCase();

   let searchedPost = allPostOffice.filter((el) => el.Name.toLowerCase().includes(searchStr));

   
   displayPost(searchedPost);

   


}

// function appendPost() {
//   let container = document.querySelector(".flex-post");

//   let values = [
//     "Name : ",
//     "BranchType : ",
//     "Delivery Status : ",
//     "District : ",
//     "Divison : ",
//   ];

//   let post_p_Name = document.createElement("p");
//   let post_p_Branch = document.createElement("p");

//   let post_p_Delivery = document.createElement("p");
//   let post_p_District = document.createElement("p");
//   let post_p_Divison = document.createElement("p");

//   post_p_Name.innerText = "Name : ";

//   post_p_Branch.innerText = "Branch Type : ";
//   post_p_Delivery.innerText = "Delivery Status :";
//   post_p_District.innerText = "District : ";
//   post_p_Divison.innerText = "Divison : ";

//   // for(let i=0;i<5;i++){
//   //     document.createElement("span").setAttribute("class","post-info");
//   // }
//   let postSpan = document.createElement("span");
//   postSpan.innerText = "Bihar Sarif";

//   post_p_Name.append(postSpan);

//   postSpan.setAttribute("class", "post-info");

//   container.append(
//     post_p_Name,
//     post_p_Branch,
//     post_p_Delivery,
//     post_p_District,
//     post_p_Divison
//   );
// }

// appendPost();

//  (function iife(){
//     console.log("check the console.");
// })();

//allSpanEle[1].innerText = Ip_Add_Info.
//console.log(allInfoEle[0]);

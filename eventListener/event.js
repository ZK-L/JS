const form = document.querySelector("form");
const submit = document.getElementById("submit");
const lname = document.getElementById("lname");
const fname = document.getElementById("fname");
const alertMsg = document.getElementById("alert");

form.onsubmit = function(e){
    if(lname.value === "" || fname.value === ""){
        e.preventDefault();
        alertMsg.textContent = "You need to fill in both names!";
    } 
}
// above is preventing the default event
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1; i<6; i++){
    let img = document.createElement("img");
    let dir = "images/pic"+i+".jpg";
    img.setAttribute("src", dir);
    thumbBar.appendChild(img);
    img.addEventListener("click", function(){displayedImage.setAttribute("src", dir)});
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function (){
    if (btn.textContent === "Darken"){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }};



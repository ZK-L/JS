const navBar = document.querySelector("nav");

let sticky = navBar.offsetTop;

window.onscroll= (()=>{
    if(window.pageYOffset > sticky){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
});

// image gallery 

const gallery = document.querySelector(".image-gallery");

let url = "baking.json"

fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    for (let i = 0; i< data.length; i++){
        let item = data[i];
        let name = item.name;
        let price = "$"+item.price;
        let img = "http://www.bigw.com.au"+item.image;

        let itemLi = document.createElement("div");
        itemLi.classList.add(["image-thumb"]);

        let nameTag = document.createElement("p");
        nameTag.classList.add("nameTag");
        nameTag.textContent = name;
        
        let priceTag = document.createElement("p");
        priceTag.classList.add("priceTag");
        priceTag.textContent = price;
        
        let imgSrc = document.createElement("img");
        imgSrc.setAttribute("src",img);

        let btn = document.createElement("button");
        btn.textContent="shopping now";
        btn.classList.add("shoppingBtn");
      

        itemLi.appendChild(imgSrc);
        itemLi.appendChild(nameTag);
        itemLi.appendChild(priceTag);
        itemLi.appendChild(btn);

        gallery.appendChild(itemLi);
    }
})
.catch((e)=>{
    console.log(e);
});

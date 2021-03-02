const buttons = document.querySelectorAll('button')
function createParagraph(){
    let para = document.createElement('p');
    para.textContent = 'you clicked the button!';
    document.body.appendChild(para);
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", createParagraph);
}
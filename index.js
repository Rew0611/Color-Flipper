var colour = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
let text= document.querySelector(".color");
let button= document.getElementById("click-btn");
button.addEventListener('click',function(){
    let rew= '#';
    for(let i=0;i<6;i++)
    {
        rew += colour[randomnumber()];
    }
    text.textContent=rew;
    document.body.style.backgroundColor=rew;
})
function randomnumber()
{
 return Math.floor(Math.random()*colour.length);
}
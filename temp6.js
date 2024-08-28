let num = document.querySelectorAll(".stats .num")
let stats = document.querySelector(".stats")


window.onscroll=function(){
    if (window.scrollY >= stats.offsetTop){
        num.forEach((num)=>{
            stratCount(num)
        })
    }
}



function stratCount(el){
   let  cum=el.dataset.num;
    let count = setInterval(()=>{
        
        el.textContent++ ;
        if (el.textContent == cum){
          
            clearInterval(count)
        }
    },100)
}

let scroll =document.querySelector(".scroll");
let height= document.documentElement.scrollHeight - document.documentElement.clientTop;
window.onscroll=function(){
let scrolltop= document.documentElement.scrollTop
    scroll.style.width= `${(scrolltop/height)*100}%`
    
}
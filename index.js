const img = document.querySelectorAll('.question__img');
const anw = document.querySelectorAll('.answer');

anw.forEach(a=>{
    a.classList.add("ocultar");
});

img.forEach(image=>{
    image.addEventListener("click",function(e){
        
        anw.forEach(a=>{
            if(a.dataset.id!=e.target.parentNode.nextElementSibling.dataset.id){
                a.classList.add("ocultar");
            }
        });

        img.forEach(imgs => {
            if(imgs.dataset.id!=e.target.dataset.id){
                imgs.src="./assets/images/icon-plus.svg";
            }
        });


        const domElemAnsw=e.target.parentNode.nextElementSibling;
        if(domElemAnsw.classList.contains("ocultar")){
            domElemAnsw.classList.remove("ocultar");
            e.target.src="./assets/images/icon-minus.svg";
        }else{
            domElemAnsw.classList.add("ocultar");
            e.target.src="./assets/images/icon-plus.svg";
        }

        
    }
    );
});


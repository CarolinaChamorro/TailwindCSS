var btnMode=document.getElementById("switch");

btnMode.addEventListener('click',function (){
    if(document.body.classList.toggle("bg-gray-600")==true){
        btnMode.classList.toggle("bg-gray-300");
    }else {
        btnMode.classList.toggle("bg-gray-600");
    }
    
})
    element = document.querySelector("#phone");
    let state = "false";
     element.addEventListener("click",()=>{
        if(state === "false"){
       menu= document.querySelector(".menu");
       menu.style="display:flex";
       state="true";
        }
        else{
            state = "false";
            menu.style="display:none";
           
        }
    })
    $(document).ready(()=>{
        $("#message").on("click",()=>{
            $("#add").css("display","flex")
         });
         $("#close").on("click",()=>{
             $("#add").css("display","none")
          });
        let peoples = 3;
        setInterval(()=>{
        let  min = Math.ceil(5);
        let max = Math.floor(10000);
  peoples+= Math.floor(Math.random() * (max - min)) + min;
        $('#schet').html(`${peoples} человек!`);
    },500);
   
    $(".content img").on("click",function(e){ 
    let src = $(this).attr('src');
    console.log(src);
    createImg(src);
    $('.img').on('click',()=>{
        $('.add_v').remove();
    });
    
});
});

function createImg(src){
    const globCont = $('<div>',{'class': 'add_v','id':'img'})
    const container = $('<div>', {'class': 'img'});
    const img = $(`<img src='${src}'>`);
    container.append(img,closed);
    globCont.append(container);
    $('body').append(globCont);
    $("#img").css("display","flex");
    
}

//    jQuery
$(document).ready(function(){
      //  LOGIN AREA
// selecting tab
    
//    
//    let tabBtn=$('.nav-pills');
//   tabBtn.on('click',removeTabActive);
//    
//    
//    function removeTabActive(e){
//    let tabs=$('.active');
//        tabs.each(function(){
//          
//            this.className=this.className.replace('active','');       
//        })
//        
//        e.target.className+=' active';    
//     const pan= document.getElementById(e.target.href.split('#')[1])
//       
//        
//       pan.className=' active';
//    }
// 
    
    
//    end of selecting tab
    
    
 const backg=$('.backg-Login'); 
    backg.show(2000);
        
    
          //    form area
//    sign in
    const signInBtn=$('.submit');
    
   signInBtn.on('click',function(e){
       e.preventDefault();
      const email=$('.input-email').val();
       const pass=$('.input-password').val();
      const err=$('.offer-feedback');
       const backg=$('.backg-Login');
       const successForm=$('.offer-section');
        if (email === ''|| pass === '') {
        err.text('Please fill all fields to Sign In');
        err.addClass('error');
            err.removeClass('hide');
    }
       else{
           err.addClass('success');
           err.removeClass('error');
           err.text(' Sign In successful');
           err.removeClass('hide');
           backg.fadeOut(3000);
            successForm.fadeIn(3000);             
       }
       
       
   })
    
    //sign Up
    const signUpBtn=$('.submitUp');
    signUpBtn.on('click',function(e){
        e.preventDefault();
       const firstname=$('.input-first').val();
       const lastname=$('.input-last').val(); 
      const emailUser=$('.input-email-user').val();
       const passUser=$('.input-password-user').val();
       const confirmPass=$('.input-confirm-password').val();
    const backg=$('.backg-Login'); 
        const successForm=$('.offer-section');
       
        const err=$('.offer-feedback');
        if(firstname === ''|| lastname === '' || emailUser === ''|| passUser === '' || confirmPass===''){
    err.text(' Please fill all fields in order to Sign Up');
            err.addClass('error');
            err.removeClass('success');
            err.removeClass('hide');
              if(passUser!==confirmPass){
              
            err.addClass('error');
           err.removeClass('success');
           err.text(' The confirm password does not match the password');
            
            
        }
        }

       
         else{   err.addClass('success');
           err.removeClass('error');
           err.text(' Registration is successful');
            err.removeClass('hide');
              backg.fadeOut(3000);
              successForm.fadeIn(3000);
        }
       
        
    })
    
    
    
    
    // navbar  
    
    $('.burger').click(function(){
        $('.navy').slideToggle(2000);
        $(this).toggleClass('toggle');
        
    })
    
   /// turn.js
    
    
        
    $('#kong-news').turn({gradients:true,acceleration:true});
    
    
    /// ripples
    $('.admission').ripples({
        dropRadius:12,
         perturbance: 0.05,                 
                            });
    
    //team area
    $('.wrapper').click(function(){
        
        $(this).toggleClass('effect');
    })
    
    
});

// java script

//navbar

const navul=document.querySelector('.navul');
const topNav=navul.offsetTop;


function fixNav(){
 if(window.scrollY>=topNav){
     navul.classList.add('fixed-nav');

 }
    else{
        navul.classList.remove('fixed-nav');
    }
    
}



window.addEventListener('scroll',fixNav);



     ///career section
const careerInfo = document.getElementById('career-info');
 careerInfo.addEventListener('click',tabClicked);
function tabClicked(e){
    const tabBtn=document.querySelectorAll('.current');
    tabBtn.forEach(function(tab){

    tab.className=tab.className.replace('current',"");
        
    });  
     e.target.className+=' current';
   
    document.getElementById(e.target.href.split('#')[1]).className+=' current';
}


// 3d cube effect

var swiper=new Swiper('.swiper-container', {
               effect:'cube',
               autoplay:{delay:2000,},
               loop:true
})



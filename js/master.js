//                  starttoggle spin class on icon 

document.querySelector(".fa-gear").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}


/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/

// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}




/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
//                         switch colors
/*set color option in localStorage 
the first check if this value exist in local storage or Node,if no set this value */

const mainColor=localStorage.getItem("colors");
if (mainColor !== null){
    document.documentElement.style.setProperty('--main-color', mainColor); 
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove('active');
        if (element.dataset.color === mainColor){ 
            element.classList.add('active'); } 
    });
          
      
}
const colorsList=document.querySelectorAll(".colors-list li");

colorsList.forEach(li  => {
    

        li.addEventListener("click",  (e) => {
            document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
            localStorage.setItem("colors",e.target.dataset.color);
//                   exchange active class between childs
handleActive(e);


        });
    });


/*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ */
//                     random background option

let randomBackEl =document.querySelectorAll(".random-bg span");
// Random Background Option
let backgroundOption = true ;
// Variable To Control The Background Interval
let backgroundInterval;
let backgroundLocalItem=localStorage.getItem("background_option");


randomBackEl.forEach(span  => {
    
        span.addEventListener("click",  (e) => {
          handleActive(e)
            if (e.target.dataset.background === 'yes') {
                backgroundOption = true;
                randomizeImgs();         
                localStorage.setItem("background_option", true);
          
              } else {          
                backgroundOption = false;          
                clearInterval(backgroundInterval);          
                localStorage.setItem("background_option", false);          
              }
});
});
  
 
// Check If Random Background Local Storage Is Not EMpty

if ( backgroundLocalItem !== null){
    // console.log(backgroundLocalItem)
    // console.log(typeof backgroundLocalItem)}
    
   
        if (backgroundLocalItem === 'true'){ 
             backgroundOption = true;
        }
        else{
            backgroundOption = false;
        }
      // Remove Active Class From All Spans
  document.querySelectorAll(".random-bg span").forEach(element => {

    element.classList.remove("active");
});

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".yes").classList.add("active");

  } else {

    backgroundOption = false;

    document.querySelector(".no").classList.add("active");
    

  }
}

// randoize  Pages
let landingpage =document.querySelector(".landing-page");
let activeobj =document.querySelector(".mm");
let images =["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg"]

function randomizeImgs(){
    if ( backgroundOption === true ){
        backgroundInterval = setInterval(()=>{
            let mybackground=Math.floor( Math.random() * images.length);
            landingpage.style.backgroundImage='url("images/' + images[mybackground] + '")';
               
                
                
            }
        ,5000);
    }
}
randomizeImgs();

/*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ */
//                                       Select Skills Selector


window.onscroll = function () {
  let ourSkills = document.querySelector(".skills");
  // Skills (Offset Top): the top position of skill object
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills (Outer Height):the height of skills obj including border and ....
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;
/*               عايز اعمل معادله ان لو وصلت للعنصر فهقول مثلا الجذء اللي فوق العنصر
  .                                                     العنصر نفسه مطرح منه طول الشاشه
  .                                          لو كان اصغر من او يساوي ال الجذء الراسي +                         */
  if ((windowScrollTop+300) >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }else{
    

    document.querySelectorAll(".skill-progress span").forEach(sss => {

      sss.style.width = 0;

    });
  }

};
/*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ */
//                                gallary

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {
 // Create Heading
 let imgHeading = document.createElement("h3");

 // Create text For Heading
 let imgText = document.createTextNode(img.alt);

 // Append The Text To The Heading
 imgHeading.appendChild(imgText);

 // Append The Heading To The Popup Box
 popupBox.appendChild(imgHeading);

}

// Create The Image
let popupImage = document.createElement("img");

// Set Image Source
popupImage.src = img.src;

// Add Image To Popup Box
popupBox.appendChild(popupImage);

// Append The Popup Box To Body
document.body.appendChild(popupBox);
// Create The Close Span
let closeButton = document.createElement("span");
let maxb = document.createElement("span");
let minb = document.createElement("span");

// Create The Close Button Text
let closeButtonText = document.createTextNode("X");
let maxx = document.createTextNode("[]");
let minx = document.createTextNode("-");

// Append Text To Close Button
closeButton.appendChild(closeButtonText);
maxb.appendChild(maxx);
minb.appendChild(minx);
// Add Class To Close Button
closeButton.className = 'close-button';
maxb.className= 'max';
minb.className= 'min';
// Add Close Button To The Popup Box
popupBox.appendChild(closeButton);
popupBox.appendChild(maxb);
popupBox.appendChild(minb);

});

});

// Close Popup
document.addEventListener("click", function (e) {

if (e.target.className == 'close-button') {

// Remove The Current Popup
e.target.parentNode.remove();

// Remove Overlay
document.querySelector(".popup-overlay").remove();

}

});
document.addEventListener("click", function (e) {

if (e.target.className == 'max') {

// Remove The Current Popup
e.target.parentNode.style.width= '900px'

// Remove Overlay


}

});
document.addEventListener("click", function (e) {

if (e.target.className == 'min') {

// Remove The Current Popup
e.target.parentNode.style.width= '600px'

// Remove Overlay


}

});
/* ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
//                  Sclorlling into specific Sections by bullets and nav bar

// Select All bullets
const Bullets = document.querySelectorAll(".nav-bullets .bullet");
// Select All Links
const Links = document.querySelectorAll(".links a");

function scrollToXsection(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToXsection(Bullets);
scrollToXsection(Links);
/*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
//                     show or hide bullets and add it to local storage

let optionOfBullet=document.querySelectorAll(".bullets-option span");
let optionOfBulletLocalStorage=localStorage.getItem("bullet-box")



if(optionOfBulletLocalStorage !== null){
  optionOfBullet.forEach(span =>{
    span.classList.remove("active");
  });
  if(optionOfBulletLocalStorage === 'none'){
    document.querySelector(".nav-bullets ").style.display='none';
    document.querySelector(".bullets-option .no").classList.add("active");

  }else{
    document.querySelector(".nav-bullets ").style.display='block';
    document.querySelector(".bullets-option .yes").classList.add("active");

  }
}

optionOfBullet.forEach(span =>{
  span.addEventListener("click",(e)=>{
    if (span.dataset.display === 'hide'){
      document.querySelector(".nav-bullets ").style.display='none';
      localStorage.setItem("bullet-box", 'none')
    }else{
      document.querySelector(".nav-bullets ").style.display='block';
      localStorage.setItem("bullet-box", 'block');
    }   
    handleActive(e);
    
  });
  
});
/*ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
//                          Reset Button
document.querySelector(".reset-options").onclick =() => {

  // localStorage.clear();or 
  localStorage.removeItem("colors");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullet-box");

  // Reload Window
  window.location.reload();

};


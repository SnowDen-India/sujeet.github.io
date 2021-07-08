var navAnchorTags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navAnchorTags.length;i++){

       navAnchorTags[i].addEventListener("click",function(event){
           event.preventDefault();

      var targetSectionId=this.textContent.trim().toLowerCase();
       var targetSection=document.getElementById(targetSectionId);

           var interval=setInterval(function(){
                
                var cordinates=targetSection.getBoundingClientRect();
                 if(cordinates.top<=0){
                 	clearInterval(interval);
                 return;
                 }
                 window.scrollBy(0,50);
                   

           },20)
	
});
  
}

// skills

var progessBar=document.querySelectorAll('.skill-progress > div');
var skills=document.getElementById("skills-section");
window.addEventListener('scroll',checkScroll);
var animationDone=false;


function initialBar(){
	for(let bar of progessBar){
		bar.style.width=0+"%";
	}
}

initialBar();
function fillBars(){
           for(let bar of progessBar){
	       let widthBar=bar.getAttribute("data-bar-width");
	        let currentWidth=0;
	        let intervalSkills=setInterval(function(){
                if(currentWidth>widthBar){
                	clearInterval(intervalSkills);
                }
                  currentWidth++;
                  bar.style.width=currentWidth+"%";
	        },5) 


             }

}


function checkScroll(){
	var cordinates=skills.getBoundingClientRect();
	if(!animationDone && cordinates.top<window.innerHeight){
	      animationDone=true;
        fillBars()
	}
}







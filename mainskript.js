var showing;
var dots;
var howmuch;
var width;
var height;
var space;
var ison = false;
var pop = Math.random() * 10;
window.onload = function(){
space = document.getElementById("dot");
if(document.getElementById("dot") == null){
    console.log("null");
}
dots = [];
howmuch = 250;
width = space.width;
height = space.height;
var x;
for(x = 0; x < howmuch; x++){
    dots.push({x : Math.random() * width, y : Math.random() * height, speedx : Math.random() * 6, speedy : Math.random() * 10 - 5})
}

showing = space.getContext("2d");
};

function showdots(){
    showing.clearRect(0,0,width,height);
    var x,g;
    for(x = 0; x < howmuch; x++){
        g = dots[x];
        showing.beginPath();
        showing.arc(g.x, g.y,1.3,0,Math.PI * 2, false);
        showing.fillStyle = "rgb(145, 224, 223)";
        showing.fill();
    }
}

function updatedots(){
    var i,g;
    for(i = 0; i < howmuch; i++){
        g = dots[i];
        if(!ison){
        g.x += g.speedx;
        g.y += g.speedy;
        
      

        if(g.x > width){
            g.x = width;
            
            g.speedx *= -1; 
        }
        else if(g.x < 0){
            g.x = 0;
            g.speedx *= -1; 
        }

        if(g.y > height -3){
            g.y = height - 3;
            g.speedy *= -1;

        }else if(g.y < 0){
            g.y = 0;
            g.speedy *= -1;
        }}
    }


    
}
var x_pos;
var y_pos;
window.onmousemove = checkpos;

function checkpos(event){
    if(space.matches(':hover')){
       ison = true;
       x_pos = event.clientX;
       y_pos = event.clientY;
       var z, j;
        for(z = 0; z < howmuch; z++){
            j = dots[z];
         
            if(j.x  > x_pos * (300 * 100 /document.body.scrollWidth ) / 100){
                j.x -= 5;
            }
            else if(j.x  < x_pos * (300 * 100 /document.body.scrollWidth ) / 100){
                j.x += 5;
            }
            /*
            if(j.y > y_pos * (150 * 100 /400 ) / 100 -15){
                j.y -= 5;
            }
            else if(j.y  < y_pos * (150 * 100 /400 ) / 100 -15){
               j.y +=5;
            }*/
        }
    }
    else{
        ison = false;
    }
}

function movedots(){
    if(ison){
        var z, j;
        for(z = 0; z < howmuch; z++){
            j = dots[z];
         
            if(j.x  > x_pos * (300 * 100 /document.body.scrollWidth ) / 100){
                j.x -= 5;
            }
            else if(j.x  < x_pos * (300 * 100 /document.body.scrollWidth ) / 100){
                j.x += 5;
            }
            /*
            if(j.y > y_pos * (150 * 100 /400 ) / 100 -15){
            j.y -= 5;
            }
            else if(j.y  < y_pos * (150 * 100 /400 ) / 100 -15){
               j.y +=5;
            }
            */
        }
    }
}


setInterval(function(){showdots(); updatedots(); movedots();},1000/35);

var zmiana=false;
window.scrollBy(0,5);

window.addEventListener("scroll", function(){
    if(window.scrollY < 50 && zmiana){
    document.getElementById("navi").style.animationName = "changeback";
    document.getElementById("navi").style.animationDuration = "0.4s";
    document.getElementById("navi").style.animationFillMode = "forwards";
    zmiana = false;
    console.log("zmiana powrotna");
    } 
    if(!zmiana && window.scrollY > 50){
    document.getElementById("navi").style.animationName = "changebg";
    document.getElementById("navi").style.animationDuration = "1.5s";
    document.getElementById("navi").style.animationFillMode = "forwards";
    zmiana = true;
    console.log("zmiana dobra");
    }
    
});
/*variables for the simulation
         ---to change the speed of the simulation--- */ 
var speed_star = 0.5;

var centX = 400;
var centY = 400;
var earth_r = 100;
var earthX, earthY;
var wrt_p = "sun";
var earth_theta=0;

function setup() {
  createCanvas(1000, 680);
  
  resetSketch1();

  var button1=createButton("wrtSun");
  button1.mousePressed(resetSketch1);
    
  var button2 = createButton("wrtEarth");
  button2.mousePressed(resetSketch2);
    
  slider = createSlider(0, 3, 0.5,0.1);
  slider.position(20, 650);
  slider.style('width', '120px');
}

function resetSketch1() {
  wrt_p = "sun";  
  sun = new planet(0,25,0*speed_star,wrt_p);
  mercury = new planet(20,4,0.04787 ,wrt_p );    
  venus = new planet(50,5,0.03502 ,wrt_p);    
  earth = new planet(100,10,0.02978 ,wrt_p);
  mars = new planet(140,4.5, 0.024077 ,wrt_p);
  jupiter = new planet(250,15, 0.01307 ,wrt_p);
  saturn = new planet(300,15, 0.00969 ,wrt_p);
  uranus = new planet(350,5, 0.00681 ,wrt_p);
  neptune = new planet(370,5, 0.00543 ,wrt_p);
  pluto = new planet(390,5, 0.0047 ,wrt_p);
}

function resetSketch2() {
  wrt_p = "earth";  
  sun = new planet(0,25,0,wrt_p,wrt_p);
  mercury = new planet(20,4,0.04787  ,wrt_p);    
  venus = new planet(50,5,0.03502,wrt_p);    
  earth = new planet(100,10,0.02978 ,wrt_p);
  mars = new planet(140,4.5, 0.024077 ,wrt_p);
  jupiter = new planet(250,15, 0.01307,wrt_p);
  saturn = new planet(300,15, 0.00969,wrt_p);
  uranus = new planet(350,5, 0.00681,wrt_p);
  neptune = new planet(370,5, 0.00543 ,wrt_p);
  pluto = new planet(390,5, 0.0047 ,wrt_p);
}



function draw() {
  background(0);
  //console.log(frameRate());
  textSize(12);
  fill(255,204,0);
  text('Dynamics:',1,20);
  text('Planet Creation and Graphics',1,35);
  text('by Seung-Jae Kim',1,50);
    
  //background -- stars
  randomSeed(500)
  for (var j = 0; j <= 500;j++){
    fill(random(120,200),random(120,200),random(120,200),random(80,150))
    circle(random(800),random(800),random(2))
  }
  
  speed_star = slider.value();
    
  if (wrt_p == "sun") {
    earth.move();
    earth.show(1,200,150);
    
    fill(1,200,150);
    text('earth',earth.x,earth.y,1);
    
  } else {

    earth_theta = earth_theta + 0.02978 * speed_star;
    let earth_x = 100*sin(earth_theta);
    let earth_y = 100*cos(earth_theta); 
    earthX = earth_x+400;
    earthY = earth_y+400; 
    fill(1,200,150);
    circle(500,400,10);

  }
 
  sun.move();
  sun.show(255,204,0);
  
  mercury.move();
  mercury.show(255,165,3);
    
  venus.move();
  venus.show(255,165,3);
  
  mars.move();
  mars.show(200,200,5);
  
  jupiter.move();
  jupiter.show(255,165,150);
    
  saturn.move();
  saturn.show(220,180,130);
    
  uranus.move();
  uranus.show(175,172,63);
    
  neptune.move();
  neptune.show(198,181,45);
    
  pluto.move();
  pluto.show(230,230,230);
    
}


function planet(dist_from_sun, size, speed, wrtPlanet) {
    
    this.r = dist_from_sun;
    this.size = size;
    this.spd = speed;
    this.theta = 0;
    this.x = 0;
    this.y =0;
    this.wrt = wrtPlanet;
    //console.log(this.wrt);
    this.history = [];
    
    this.move = function() {
        
        if (this.wrt == "earth") {
            this.theta = this.theta + this.spd*speed_star;
            this.x = this.r*cos(-this.theta) + centX;
            this.y = this.r*sin(-this.theta) + centY;
            let xx = this.x - earthX;
            let yy = this.y - earthY;
            this.x = xx + (centX+earth_r);
            this.y = yy + centY;
            
        } else {
            this.theta = this.theta + this.spd*speed_star;
            this.x = this.r*cos(-this.theta) + centX;
            this.y = this.r*sin(-this.theta) + centY;  
            
        }
        this.history.push(createVector(this.x,this.y));
        if (this.history.length>800) {
            this.history.splice(0,1);
        }

    }
    
    this.show = function(r,g,b) {
        
        noStroke();
        fill(r,g,b);
        circle(this.x,this.y,this.size);
        
        for (var i = 0;i<this.history.length-1; i++) {
            var pos1 = this.history[i];
            var pos2 = this.history[i+1];
            stroke(250);
            strokeWeight(0.8);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
        }
    
    }
   
}

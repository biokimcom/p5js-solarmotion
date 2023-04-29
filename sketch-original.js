// to run this project press the button on the top left



/*          ---the reason i started this project is: ---
was because i wanted to learn about the complexity of the solar system and try
replicate it using simple and replicable code.
by doing this I also got a friend to help me with many problems that i face and still
face. I'm writting while I still haven't finished this project and I think it will
be not for a while. The dream for this project is to atleast hold over 50 moons and 
asteroids, nearby stars and to show facts on any planet that you click on.
by doing this you or anyone that want's to learn and see a simulation of the solar
system would be able to and make easy edits and to see what would happen!
This project is stil being updated and made better every day and I hope that
you see why i'm putting everything on this project - it's so damn intresting
  --ceaserian  */

/*                  ---plan's of this project---
to add all of the main planets - done
to give the main planets a path they take and draw it - done
maning of every planet,moon and star - still doing(have to finish others to finish this)
to add the orbit mechanism for moons - done
to add atleast 10 moons - still doing (7 moons)
to add some sort of background to look nice
mess around with the colors on the main big planets
add io ,europa, ganymede and callisto for jupiter - counter clock - done
start adding more moons for saturn */


/*                       ---update log---
1.0 added all of the main planets and its actual movement speed and approximate space from the sun, added the mechanism of orbitation
1.1 added pluto and it's actual orbit place -- the orbit is skewed
1.2 fixed the moon mechanism for the earth -- made the moon orbit the earth
1.3 titan for saturn
1.4 added charon for pluto
1.5 added many comments explaining and adding information for each planet
1.5 chagned charon's orbit -- it's skewed
1.6 changed all of the planet's direction of movement
1.6a changed the direction of venus and mercury as they move clockwise
1.6c added all of the main moons of jupiter and gave them the correct lenght from jupiter
1.6d added ceres in the asteoroid area and made it's robit skewed closer to mars and to shoot out - how it's actually is (it's line is also skewed in 3d but i cannot replicate at 2d)
1.7 asteroid belt created and orbiting sun
1.7a added the habitable zone
1.7b added the moon rhea for saturn */


/*variables for the simulation
         ---to change the speed of the simulation--- */ 
var speed_star = 0.1
var _alpha = 30
var aplha_habital = 25


//variables for the planets/moons/stars - and facts

//closest to the sun in solar system - place 1
var mercury_x=400;
var mercury_y=400;
var mercury_theta = 47.87;
var mercury_r = 20;
var speed_mercury = 0.04787 * speed_star

//2nd largest terrestrial planet in solar system - place 2
var venus_x=400;
var venus_y=400;
var venus_theta = 35.02;
var venus_r = 50;
var speed_venus = -0.03502 * speed_star

//the only know planet to house life in the solar system - place 3
var earth_x=400;
var earth_y=400;
var earth_theta = 29.78;
var earth_r = 100;
var speed_earth = -0.02978 * speed_star

//natural Satellite of earth - the outcome of the mars-sized planet hiting earth cousing dinosours to die, instantly
var moon_x=400;
var moon_y=400;
var moon_theta = 29.78;
var moon_orb_earth = 2;
var moon_r = 149;
var speed_moon = 0.07978 * speed_star

//red planet in solar system - place 4
var mars_x=400;
var mars_y=400;
var mars_theta = 24.077;
var mars_r = 140;
var speed_mars = -0.024077 * speed_star

//gas giant largest(2.5 x all the planets put together) in solar system - place 5
var jupiter_x=400;
var jupiter_y=400;
var jupiter_theta = 13.07;
var jupiter_r = 250;
var speed_jupiter = -0.01307 * speed_star

//gas giant 2nd largest in solar system - place 6
var saturn_x=400;
var saturn_y=400;
var saturn_theta = 20;
var saturn_r = 300;
var speed_saturn = -0.00969 * speed_star

//ice giant in solar system - place 7
var uranus_x=400;
var uranus_y=400;
var uranus_theta = 6.81;
var uranus_r = 350;
var speed_uranus = -0.00681 * speed_star

//gas giant in solar system - place 8
var neptune_x=400;
var neptune_y=400;
var neptune_theta = 5.43;
var neptune_r = 370;
var speed_neptune = -0.00543 * speed_star

//dwarf planet in solar system - place 9
var pluto_x=400;
var pluto_y=400;
var pluto_theta = 25.70;
var pluto_r = 360;
var speed_pluto = -0.0047 * speed_star

//titan for staurn
var titan_x=400;
var titan_y=400;
var titan_theta =2.70;
var titan_r = 310;
var speed_titan = -0.027 * speed_star

//charon for pluton
var charon_x=400;
var charon_y=400;
var charon_theta =7.70;
var charon_r = 370;
var speed_charon = -0.027 * speed_star

//io for jupiter
var io_x=400;
var io_y=400;
var io_theta =7.70;
var io_r = 160;
var speed_io = -0.027 * speed_star

//europa for jupiter
var europa_x=400;
var europa_y=400;
var europa_theta =100.70;
var europa_r = 200;
var speed_europa = -0.017 * speed_star

//ganymede for jupiter
var ganymede_x=400;
var ganymede_y=400;
var ganymede_theta =150.70;
var ganymede_r = 260;
var speed_ganymede = -0.013 * speed_star

//ganymede for jupiter
var callisto_x=400;
var callisto_y=400;
var callisto_theta =234.70;
var callisto_r = 300;
var speed_callisto = -0.009 * speed_star

//ceres for the asteroid belt
var ceres_x=400;
var ceres_y=400;
var ceres_theta =234.70;
var ceres_r = 180;
var speed_ceres = -0.018 * speed_star

//rhea for the saturn
var rhea_x=400;
var rhea_y=400;
var rhea_theta =234.70;
var rhea_r = 180;
var speed_rhea = -0.018 * speed_star

//asteroid belt 
var r1 = 165,r2=210;
var x,y,x2,y2;
var asteroid_theta=0;
var testX,testY;

function setup() {
  createCanvas(810, 780);
  
}
function draw() {
  background(0);
  //background -- stars
  randomSeed(500)
  for (var j = 0; j <= 500;j++){
    fill(random(120,255),random(120,255),random(120,255),random(80,150))
    circle(random(800),random(800),random(3))
  }
  
  //habital zone
  
  //optimistic
  fill(1,250,1,aplha_habital);
  circle(400,400,300);
  fill(0);
  circle(400,400,130)
  
  //conservative
  fill(1,250,1,aplha_habital);
  circle(400,400,250);
  fill(0);
  circle(400,400,100)
  
  //not habital
  fill(250,1,1,aplha_habital);
  circle(400,400,160);
  
  //creator's!
  textSize(10);
  fill(255);
  text('                   Creators:',1,20);
  text('ceaserianshiftisfun: the main mechanics',1,30);
  text('planet creation and graphics',1,40);
  text('rayll: asteroid belt creation and  ',1,55);
  text('helping ceaserian  ',1,65);
  
  //sun
  strokeWeight(4);
  fill(210,210,210)
  text('sun',412.5,400,1);
  circle(400,400,25)
  noStroke();
  
  //planets and moons mechanism including the circle that shows their orbit path
  
  //mercury
  mercury_x=+mercury_r*sin(mercury_theta);
  mercury_y=+mercury_r*cos(mercury_theta);
  text('mercury',mercury_x+400,mercury_y+400,1);
  stroke(255,165,3,_alpha);
  noFill(255);
  circle(400,400,40);
  noStroke();
  fill(255,165,3);
  circle(mercury_x+400,mercury_y+400,3);
  mercury_theta = mercury_theta + speed_mercury;
  
  //venus
  venus_x=+venus_r*cos(venus_theta);
  venus_y=+venus_r*sin(venus_theta);
  text('venus',venus_x+400,venus_y+400,1);
  stroke(255,165,3,_alpha);
  noFill(255);
  circle(400,400,100);
  noStroke();
  fill(255,165,3);
  circle(venus_x+400,venus_y+400,5);
  venus_theta = venus_theta + speed_venus;
  
  //earth
  fill(1,200,150);
  earth_x=+earth_r*cos(earth_theta);
  earth_y=+earth_r*sin(earth_theta);
  text('earth',earth_x+400,earth_y+400,1);
  stroke(1,200,150,_alpha);
  noFill(255);
  circle(400,400,200);
  noStroke();
  fill(1,200,150);
  circle(earth_x+400,earth_y+400,5.5);
  earth_theta = earth_theta + speed_earth;
  
  //moon
  fill(200,200,200);
  moon_x=+moon_r*sin(moon_theta)/15;
  moon_y=+moon_r*cos(moon_theta)/15;
  text('moon',earth_x+400+moon_x,earth_y+400+moon_y,1);
  circle(earth_x+400+moon_x,earth_y+400+moon_y,3);
  moon_theta = moon_theta + speed_moon;
  
  //mars
  fill(200,200,5);
  mars_x=+mars_r*cos(mars_theta);
  mars_y=+mars_r*sin(mars_theta);
  text('mars',mars_x+400,mars_y+400,1);
  stroke(200,200,5,_alpha);
  noFill(255);
  circle(400,400,280);
  noStroke();
  fill(200,200,5);
  circle(mars_x+400,mars_y+400,4.5);
  mars_theta = mars_theta + speed_mars;
  
  //jupiter
  fill(255,165,150);
  jupiter_x=+jupiter_r*cos(jupiter_theta);
  jupiter_y=+jupiter_r*sin(jupiter_theta);
  text('jupiter',jupiter_x+407.5,jupiter_y+400,1);
  stroke(255,165,150,_alpha);
  noFill(255);
  circle(400,400,500);
  noStroke();
  fill(255,165,150);
  circle(jupiter_x+400,jupiter_y+400,15);
  jupiter_theta = jupiter_theta + speed_jupiter;

  //saturn
  fill(220,180,130);
  saturn_x=+saturn_r*cos(saturn_theta);
  saturn_y=+saturn_r*sin(saturn_theta);
  text('saturn',saturn_x+407.5,saturn_y+400,1);
  stroke(220,180,130,_alpha);
  noFill(255);
  circle(400,400,600);
  noStroke();
  fill(220,180,130);
  circle(saturn_x+400,saturn_y+400,15);
  fill(240,240,203);
  ellipse(saturn_x+400,saturn_y+400,25,4);
  saturn_theta = saturn_theta + speed_saturn;
  
  //titan
  fill(230,230,230);
  titan_x=+titan_r*cos(titan_theta)/12;
  titan_y=+titan_r*sin(titan_theta)/12;
  text('titan',saturn_x+titan_x+400,saturn_y+titan_y+400,1);
  circle(saturn_x+titan_x+400,saturn_y+titan_y+400,7);
  titan_theta = titan_theta + speed_titan;
  
  //uranus
  fill(50,100,150);
  uranus_x=+uranus_r*cos(uranus_theta);
  uranus_y=+uranus_r*sin(uranus_theta);
  text('uranus',uranus_x+400,uranus_y+400,1);
  stroke(50,100,150,_alpha);
  noFill();
  circle(400,400,700);
  noStroke();
  fill(50,100,150);
  circle(uranus_x+400,uranus_y+400,5);
  uranus_theta = uranus_theta + speed_uranus;
  
  //neptune
  neptune_x=+neptune_r*cos(neptune_theta);
  neptune_y=+neptune_r*sin(neptune_theta);
  text('neptune',neptune_x+400,neptune_y+400,1);
  stroke(50,100,200,_alpha);
  noFill(255);
  circle(400,400,740);
  noStroke();
  fill(50,100,200);
  circle(neptune_x+400,neptune_y+400,2.8);
  neptune_theta = neptune_theta + speed_neptune;
  
  //pluo
  pluto_x=+pluto_r*cos(pluto_theta)*1.10;
  pluto_y=+pluto_r*sin(pluto_theta)*1.05;
  text('pluto',pluto_x+400,pluto_y+380,1);
  stroke(210,210,210,_alpha);
  noFill(255)
  ellipse(400,380,790,756)
  noStroke();
  fill(230,230,230);
  circle(pluto_x+400,pluto_y+380,1.7);
  pluto_theta = pluto_theta + speed_pluto;
  
  //charon
  charon_x=+(charon_r*cos(charon_theta))/25
  charon_y=+(charon_r*sin(charon_theta))/25
  text('charon',pluto_x+charon_x+400,pluto_y+charon_y+390,1);
  fill(230,230,230);
  circle(pluto_x+charon_x+400,pluto_y+charon_y+390,2);
  charon_theta = charon_theta + speed_charon;
  
  //io
  io_x=+(io_r*cos(io_theta))/12
  io_y=+(io_r*sin(io_theta))/12
  text('io',jupiter_x+io_x+400,jupiter_y+io_y+400,1);
  fill(230,230,230);
  circle(jupiter_x+io_x+400,jupiter_y+io_y+400,2.5);
  io_theta = io_theta + speed_io;
  
  //europa
  europa_x=+(europa_r*cos(europa_theta))/12
  europa_y=+(europa_r*sin(europa_theta))/12
  text('europa',jupiter_x+europa_x+400,jupiter_y+europa_y+400,1);
  fill(230,230,230);
  circle(jupiter_x+europa_x+400,jupiter_y+europa_y+400,2.5);
  europa_theta = europa_theta + speed_europa;
  
  //ganymede
  ganymede_x=+(ganymede_r*cos(ganymede_theta))/12
  ganymede_y=+(ganymede_r*sin(ganymede_theta))/12
  text('ganymede',jupiter_x+ganymede_x+400,jupiter_y+ganymede_y+400,1);
  fill(230,230,230);
  circle(jupiter_x+ganymede_x+400,jupiter_y+ganymede_y+400,2.5);
  ganymede_theta = ganymede_theta + speed_ganymede;
  
  //callisto
  callisto_x=+(callisto_r*cos(callisto_theta))/12
  callisto_y=+(callisto_r*sin(callisto_theta))/12
  text('callisto',jupiter_x+callisto_x+400,jupiter_y+callisto_y+400,1);
  fill(230,230,230);
  circle(jupiter_x+callisto_x+400,jupiter_y+callisto_y+400,2.5);
  callisto_theta = callisto_theta + speed_callisto;
  
  //ceres
  ceres_x=+(ceres_r*cos(ceres_theta))
  ceres_y=+(ceres_r*sin(ceres_theta))
  text('ceres',ceres_x+400,ceres_y+420,1);
  stroke(210,210,210,_alpha);
  noFill(255)
  circle(400,420,360)
  noStroke();
  fill(230,230,230);
  circle(ceres_x+400,ceres_y+420,6.5);
  ceres_theta = ceres_theta + speed_ceres;
  
  //rhea
  rhea_x=+(rhea_r*cos(rhea_theta))/12
  rhea_y=+(rhea_r*sin(rhea_theta))/12
  text('rhea',saturn_x+rhea_x+400,saturn_y+rhea_y+400,1);
  fill(230,230,230);
  circle(saturn_x+rhea_x+400,saturn_y+rhea_y+400,3);
  rhea_theta = rhea_theta + speed_rhea;
  
  //asteroid belt
  fill(210,230,200,100);
  noStroke();
  randomSeed(3000);
  translate(width / 2, height / 2);
  rotate(asteroid_theta);
  for(var a = 0;a<3000;a++){
    testX = random(width) - width/2;
    testY = random(height) - height/2;
    if(pow(testX,2)+ pow(testY,2)< pow(r2,2) &&(pow(testX,2)+ pow(testY,2)> pow(r1,2))) {
      fill(255);
      circle(testX,testY,random(3));
    }
    asteroid_theta -= 0.000005 * speed_star
    }
}
//END
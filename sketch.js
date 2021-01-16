function setup() {
  createCanvas(400, 400);
  background(255);
  //20 border
  //hour- 360/12 =30
  //min- 360/60=6
}



function draw() {
  
  //background(255);
  
  noStroke();
  //blendMode(ADD);
  
  let ps = 100;
  let ph = 100;
  let pm = 100;
  
  let h=hour()%12;
  if(h==0)
    {
      h=12;
    }
  let m=minute();
  let s=second();
  //let ps =100;
  
  
  
  if(s<59 && s!=ps)
  {
    //hours
    background(255);
    let h=hour()%12;
    
    if(h==0)
      {
        h=12;
      }
      
    let m=minute();
    let s=second();
    ps=s;
    
    
    //hour
    if(h<12 && h!=ph)
      {
        fill(255,0,255,100);
        rect(20,400-20,h*30,-360);
        ph = h;
      }
  
    //min
    if(m<59 && m!=pm)
      {
        fill(255,255,0,100);
        rect(20,20,360,m*6);
        
        //min-hour overlap
        fill(255,150,100,100);
        rect(20,20,h*30,m*6);
        pm=m;
      }
    
    
    //sec
    //triangle(x1, y1, x2, y2, x3, y3)
    fill(0,255,255,90);
    triangle(380,380,380,400-(30+(s*6)),400-(30+(s*6)),380);
    
    
    //to make the time more legible:
    //fill(255,0,255);
    //triangle(x1, y1, x2, y2, x3, y3)
    //triangle(45,20,55,20,50,25);
    //jk this is kinda ugly
    
    
    if(s==59)
      {
        print("minute"+m);
        //hour
    if(h<12 && h!=ph)
      {
        fill(255,0,255,100);
        rect(20,400-20,h*30,-360);
        ph = h;
      }
  
    //min
    if(m<59 && m!=pm)
      {
        fill(255,255,0,100);
        rect(20,20,360,m*6);
        
        //min-hour overlap
        fill(255,150,100,100);
        rect(20,20,h*30,m*6);
        pm=m;
      }
        
        
      }
    
  }
  
  
}


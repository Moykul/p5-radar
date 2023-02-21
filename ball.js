class Ball{
    constructor(x, y, r, s){
      this.x = x;
      this.y = y;
      this.r = r;
      this.s = s;
      this.env = env;
      
    }
    move(){
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
      
    } 
    
    style(c){
        stroke(0, 255, 0);
        strokeWeight(3)
      // fill(180, 60, 60)
      //c = fill(100);
      circle(this.x, this.y, this.r)
    }
    // 
    collision(x, y){
        

      if(dist(x, y, this.x, this.y) < this.r/2){
        // fill("rgba(0, 100, 130, 220)");
        stroke(0, 100, 130);
        this.env.play();
 
    }
      else{
        stroke(60, 100, 130);
    //   fill(60, 160, 0); 
    }
      
    }


}
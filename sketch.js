var squares=[];


function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(125);



    //rotating box
    push();
    
    
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            for (var k = 0; k < 10; k++){

                len = 10;
                
                x = len * i;
                y = len * j;
                z = len * k;

                
                strokeWeight(5);
                box(x,y,z,len);
                fill(random(x),random(y),random(z));
                
                rotateX(radians(frameCount)/1000);
                rotateY(radians(frameCount)/1000);
                rotateZ(radians(frameCount)/1000);
                //translate(0,0,0);

            }

        }

    }



    
    //box(300,300,300,20,20);
    
    pop();


}

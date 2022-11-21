let buffer1 = new Buffer(50, 50);
let not1 =new NOT(50,150);
let and1 = new AND(50,250);
let nand1 = new NAND(50,350);
let or1 = new OR(150,300);
let nor1 = new NOR(300,50);
let xnor1 = new XNOR(300,350);
let xor1 = new XOR(400,250);
let switch1 = new Switch(200,200)
// wire,
//buffer,led,NOT,AND,OR,NAND,NOR,XOR,XNOR
// let wire1 = new WIRE(nand1.node1,nand1.node2);
// let wire2 = new WIRE(and1.node1,switch1.node4);
// let wire3 = new WIRE(nand1.node3,and1.node2);
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // frameRate(10);
    // scale(0.75);
    cursor("auto");
    if(moveActive)cursor("move")
    background(220);
    for (let index = 0; index < wires.length; index++) {
        const element = wires[index];
        element.show();
        element.update();
    }
    if(wireNode.length>0){
        line(wireNode[0].x,wireNode[0].y,mouseX,mouseY);
    }
    // wire1.show();
    // wire2.show();
    // wire3.show();
    // wire1.update();
    // wire2.update();
    // wire3.update();

    switch1.show()
    switch1.dragThis()
    
    buffer1.update();
    buffer1.show();
    buffer1.dragThis();
    not1.update()
    not1.show()
    not1.dragThis();
    and1.update();
    and1.show();
    and1.dragThis();
    nand1.update();     
    nand1.show();     
    nand1.dragThis();     
    or1.update();
    or1.show();
    or1.dragThis();
    nor1.update();
    nor1.show();
    nor1.dragThis();
    xor1.update();
    xor1.show();
    xor1.dragThis();
    xnor1.update();
    xnor1.show();
    xnor1.dragThis();

}





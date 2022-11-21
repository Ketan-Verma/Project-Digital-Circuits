let wires = [];
let moveActive = false;
let selectedGate = false ;
let selectionActive = false ;
let dragActive = false;
let clickDone = false; 
let wireNode = [];
function toggelMove(e){
    if(moveActive){
        
        moveActive=false;
    }
    else {
        moveActive=true;}
}
function makeWire(){
    let tempWire = new WIRE(wireNode[0],wireNode[1]);
    wires.push(tempWire)
    wireNode = [];
}
function mousePressed() {
    if(wireNode.length>0){
 }
    }
    
    function mouseReleased() {
        clickDone = false;
     wireNode=[];
   }

class Node{
    constructor(target,type){
        this.diameter = 10;
        this.target = target;
        this.type=type;
        this.active = false;
    }
    show(x,y){
        this.x=x;
        this.y=y;
        
        if(wireNode.length===2){
            makeWire();
            wireNode=[];
        }
        if(!moveActive && dist(mouseX,mouseY,this.x,this.y)<this.diameter+5){
            cursor(CROSS);
            if(mouseIsPressed){
                if(!wireNode.includes(this))
                {
                    wireNode.push(this);
                }
                // console.log(wires)       
            }
        }
        
        push();
        if(this.type=="inp"){
            if(this.active)
            {
                this.target.input = true;
                fill(color(0,255,0));
            }
        }
        else if(this.type=="opt"){
            if(this.target.output)
            {
                this.active = true;
                fill(color(0,255,0));
            }
            
        }
        else if(this.type=="inp1"){
            if(this.active)
            {
                this.target.input1 = true;
                fill(color(0,255,0));
            }
        }
        else if(this.type=="inp2"){
            if(this.active)
            {
                this.target.input2 = true;
                fill(color(0,255,0));
            }
        }
        else{
            fill(color(255))
            this.active = false;
        }
        circle(this.x,this.y,this.diameter);
        pop();
    }
}
class WIRE {
    constructor(node1,node2) {
        this.x1 = node1.x;
        this.y1 = node1.y;
        this.x2 = node2.x;
        this.y2 = node2.y;
        this.obj1 = node1;
        this.obj2 = node2;
        this.obj1.target.connected = true;
        this.obj2.target.connected = true;
        
    }
    show() {
        if(this.obj1.active || this.obj2.active){
            this.obj1.active=true;
            this.obj2.active=true;
            // console.log(this.obj1.active,this.obj2.active)
        }
        
        // console.log((this.obj2.type!=="opt"),(this.obj1.type==="opt"),this.obj1.active)
        if((this.obj2.type!=="opt")&&(this.obj1.type==="opt")&& !this.obj1.active){
            this.obj2.active = false;

        }
        if((this.obj1.type!="opt")&&(this.obj2.type=="opt")&& !this.obj1.active){
            this.obj1.active = false;
        }
        
        push();
        strokeWeight(4);
        stroke(255, 204, 100);
        line(this.x1, this.y1, this.x2, this.y2);
        pop();
    }
    update(){
        this.x1 = this.obj1.x;
        this.y1 = this.obj1.y;
        this.x2 = this.obj2.x;
        this.y2 = this.obj2.y;
    }
}
class Gate {
    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.connected = false;
        this.input;
    }
    dragThis() {
        
        
        if (moveActive && !dragActive && (mouseX > this.x - 5) && (mouseX < this.x + 60) && (mouseY > this.y - 15) && (mouseY < this.y + 33)) 
        {
            push();
            if(selectionActive){
                strokeWeight(2);
                stroke(55, 4, 200);
            }
            else{
                strokeWeight(1);
                stroke(255, 4, 100);
            }
            line(this.x + 5, this.y - 15, this.x + 5, this.y + 35);
            line(this.x + 5, this.y + 35, this.x + 60, this.y + 35);
            line(this.x + 60, this.y - 15, this.x + 60, this.y + 35);
            line(this.x + 5, this.y - 15, this.x + 60, this.y - 15);
            pop();
            if(mouseIsPressed){
                selectionActive = true;
            }
        }
        
        if(selectionActive && moveActive){
            if(mouseIsPressed)dragActive=true; 
            push();
            if(selectionActive){
                strokeWeight(2);
                stroke(55, 4, 200);
            }
            line(this.x + 5, this.y - 15, this.x + 5, this.y + 35);
            line(this.x + 5, this.y + 35, this.x + 60, this.y + 35);
            line(this.x + 60, this.y - 15, this.x + 60, this.y + 35);
            line(this.x + 5, this.y - 15, this.x + 60, this.y - 15);
            pop();  
        }
        if(dragActive){
            cursor("move")
            this.x = mouseX-25;
            this.y = mouseY-10;
    }
        if(mouseIsPressed && dragActive){
            selectionActive = false;
            dragActive = false;
        }

    }

}
class Switch extends Gate {
    constructor(x,y){
        super(x,y);
        this.node1 = new Node(this,"opt");
        this.node2 = new Node(this,"opt");
        this.node3 = new Node(this,"opt");
        this.node4 = new Node(this,"opt");
        this.output = true;
    }
    show(){
        if(!clickDone && mouseIsPressed && !moveActive ){
            
            if(dist(mouseX,mouseY,this.x+33,this.y+10)<25){
                if(this.output)this.output=false;
                else this.output=true;   
                clickDone=true;
            }
        }
        circle(this.x+33,this.y+10,50)
        push()
        if(this.output)fill(color(0,255,0));
        else fill(color(255,0,0));
        circle(this.x+33,this.y+10,40)
        pop()
        this.node1.show(this.x+33,this.y-25);
        this.node2.show(this.x+70,this.y+10);
        this.node3.show(this.x+33,this.y+45);
        this.node4.show(this.x-5,this.y+10);
    }
}
class Buffer extends Gate {
    constructor(x, y) {
        super(x, y);
        this.node1 = new Node(this,"inp");
        this.node2 = new Node(this,"opt");
        this.input = false;
        this.output = false;
        this.hover = false;
        
    }
    show() {
        line(this.x, this.y + 10, this.x + 65, this.y + 10);
        line(this.x + 50, this.y + 10, this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 15, this.y - 10);
        vertex(this.x + 15, this.y + 30);
        vertex(this.x + 50, this.y + 10);
        endShape(CLOSE);
        
        this.node1.show(this.x - 5, this.y + 10);
        this.node2.show(this.x + 70, this.y + 10);
    }
    update() {
        if (this.input && this.connected) {
            this.output = true;
        } else {
            this.output = false;
        }
        if(dist(mouseX,mouseY,this.x,this.y)<15){
            this.hover=true
        }
        else {
            this.hover = false;
        }

    }
}
class NOT extends Gate {
    constructor(x, y) {
        super(x, y);
        this.node1 = new Node(this,"inp");
        this.node2 = new Node(this,"opt");
        this.input = false;
        this.output = false;
        // this.connescted = false;

    }
    show() {
        line(this.x, this.y + 10, this.x + 70, this.y + 10);
        line(this.x + 50, this.y + 10, this.x + 70, this.y + 10);
        beginShape();
        vertex(this.x + 15, this.y - 10);
        vertex(this.x + 15, this.y + 30);
        vertex(this.x + 45, this.y + 10);
        endShape(CLOSE);
        this.node1.show(this.x - 5, this.y + 10);
        this.node2.show(this.x + 70, this.y + 10);
        circle(this.x + 50, this.y + 10, 7);
    }
    update() {
        // if(!this.connected){this.output = false;return;}
        if (!this.input && this.connected) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
}
class AND extends Gate {
    constructor(x, y) {
        super(x, y);
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 40, this.y + 10, this.x + 65, this.y + 10);
        arc(this.x + 15, this.y + 10, 60, 40, -PI / 2, PI / 2, CHORD);
        
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
        
    }
    update() {
        if (this.connected && this.input1 && this.input2) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
}
class NAND extends Gate {
    constructor(x, y) {
        super(x, y);


        // this.connescted = false;
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }
    show() {
        line(this.x, this.y, this.x + 15, this.y);
        line(this.x, this.y + 20, this.x + 15, this.y + 20);
        line(this.x + 50, this.y + 10, this.x + 65, this.y + 10);
        arc(this.x + 15, this.y + 10, 60, 40, -PI / 2, PI / 2, CHORD);
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
        circle(this.x + 50, this.y + 10, 7);
    }
    update() {
        if (this.connected && (!this.input1 || !this.input2)) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
}
class OR extends Gate {
    constructor(x, y) {
        super(x, y);


        this.mag = 5;
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        // this.connescted = false;

        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10, this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 40, this.y + 10) //e
        vertex(this.x + 35, this.y + 5 - this.mag) //d
        vertex(this.x + 30, this.y - this.mag) //c
        vertex(this.x + 20, this.y - 5 - this.mag) //b3
        vertex(this.x + 15, this.y - 5 - this.mag) //b
        vertex(this.x + 10, this.y - 5 - this.mag) //b2
        vertex(this.x + 15, this.y - this.mag) //a
        vertex(this.x + 18, this.y + 5 - this.mag) //center
        vertex(this.x + 20, this.y + 10) //0
        vertex(this.x + 18, this.y + 15 + this.mag) //center
        vertex(this.x + 15, this.y + 20 + this.mag) //a
        vertex(this.x + 10, this.y + 25 + this.mag) //b2
        vertex(this.x + 15, this.y + 25 + this.mag) //b
        vertex(this.x + 20, this.y + 25 + this.mag) //b3
        vertex(this.x + 30, this.y + 20 + this.mag) //c
        vertex(this.x + 35, this.y + 15 + this.mag) //d
        vertex(this.x + 40, this.y + 10) //e
        endShape();
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
    }
    update() {
        if (this.connected && (this.input1 || this.input2)) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
}
class NOR extends Gate {
    constructor(x, y) {
        super(x, y);


        this.mag = 5;
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        // this.connescted = false;

        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10, this.x + 65, this.y + 10);
        beginShape();
        vertex(this.x + 40, this.y + 10) //e
        vertex(this.x + 35, this.y + 5 - this.mag) //d
        vertex(this.x + 30, this.y - this.mag) //c
        vertex(this.x + 20, this.y - 5 - this.mag) //b3
        vertex(this.x + 15, this.y - 5 - this.mag) //b
        vertex(this.x + 10, this.y - 5 - this.mag) //b2
        vertex(this.x + 15, this.y - this.mag) //a
        vertex(this.x + 18, this.y + 5 - this.mag) //center
        vertex(this.x + 20, this.y + 10) //0
        vertex(this.x + 18, this.y + 15 + this.mag) //center
        vertex(this.x + 15, this.y + 20 + this.mag) //a
        vertex(this.x + 10, this.y + 25 + this.mag) //b2
        vertex(this.x + 15, this.y + 25 + this.mag) //b
        vertex(this.x + 20, this.y + 25 + this.mag) //b3
        vertex(this.x + 30, this.y + 20 + this.mag) //c
        vertex(this.x + 35, this.y + 15 + this.mag) //d
        vertex(this.x + 40, this.y + 10) //e
        endShape();
        circle(this.x + 44, this.y + 10, 7);
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
    }
    update() {
        if (this.connected && (!this.input1 && !this.input2)) {
            this.output = true;
        } else {
            this.output = false;
        }
    }
}
class XOR extends Gate {
    constructor(x, y) {
        super(x, y);


        this.mag = 5;
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        // this.connescted = false;

        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10, this.x + 65, this.y + 10);
        beginShape();
        vertex(7 + this.x + 40, this.y + 10) //e
        vertex(7 + this.x + 35, this.y + 5 - this.mag) //d
        vertex(7 + this.x + 30, this.y - this.mag) //c
        vertex(7 + this.x + 20, this.y - 5 - this.mag) //b3
        vertex(7 + this.x + 15, this.y - 5 - this.mag) //b
        vertex(7 + this.x + 10, this.y - 5 - this.mag) //b2
        vertex(7 + this.x + 15, this.y - this.mag) //a
        vertex(7 + this.x + 18, this.y + 5 - this.mag) //center
        vertex(7 + this.x + 20, this.y + 10) //0
        vertex(7 + this.x + 18, this.y + 15 + this.mag) //center
        vertex(7 + this.x + 15, this.y + 20 + this.mag) //a
        vertex(7 + this.x + 10, this.y + 25 + this.mag) //b2
        vertex(7 + this.x + 15, this.y + 25 + this.mag) //b
        vertex(7 + this.x + 20, this.y + 25 + this.mag) //b3
        vertex(7 + this.x + 30, this.y + 20 + this.mag) //c
        vertex(7 + this.x + 35, this.y + 15 + this.mag) //d
        vertex(7 + this.x + 40, this.y + 10) //e
        endShape();
        push();
        noFill()
        beginShape();
        vertex(2 + this.x + 10, this.y - 5 - this.mag) //b2
        vertex(2 + this.x + 15, this.y - this.mag) //a
        vertex(2 + this.x + 18, this.y + 5 - this.mag) //center
        vertex(2 + this.x + 20, this.y + 10) //0
        vertex(2 + this.x + 18, this.y + 15 + this.mag) //center
        vertex(2 + this.x + 15, this.y + 20 + this.mag) //a
        vertex(2 + this.x + 10, this.y + 25 + this.mag) //b2
        endShape();
        pop();
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
    }
    update() {
        if (this.connected) {
            if (this.input1 && !this.input2) {
                this.output = true;
            } else if (this.input2 && !this.input1) {
                this.output = true;
            } else {
                this.output = false
            }
        } else {
            this.output = false;
        }
    }
}
class XNOR extends Gate {
    constructor(x, y) {
        super(x, y);


        this.mag = 5;
        this.node1 = new Node(this,"inp1")
        this.node2 = new Node(this,"inp2")
        this.node3 = new Node(this,"opt")
        // this.connescted = false;

        this.input1 = false;
        this.input2 = false;
        this.output = true;
    }
    show() {
        line(this.x, this.y, this.x + 20, this.y);
        line(this.x, this.y + 20, this.x + 20, this.y + 20);
        line(this.x + 40, this.y + 10, this.x + 65, this.y + 10);
        beginShape();
        vertex(7 + this.x + 40, this.y + 10) //e
        vertex(7 + this.x + 35, this.y + 5 - this.mag) //d
        vertex(7 + this.x + 30, this.y - this.mag) //c
        vertex(7 + this.x + 20, this.y - 5 - this.mag) //b3
        vertex(7 + this.x + 15, this.y - 5 - this.mag) //b
        vertex(7 + this.x + 10, this.y - 5 - this.mag) //b2
        vertex(7 + this.x + 15, this.y - this.mag) //a
        vertex(7 + this.x + 18, this.y + 5 - this.mag) //center
        vertex(7 + this.x + 20, this.y + 10) //0
        vertex(7 + this.x + 18, this.y + 15 + this.mag) //center
        vertex(7 + this.x + 15, this.y + 20 + this.mag) //a
        vertex(7 + this.x + 10, this.y + 25 + this.mag) //b2
        vertex(7 + this.x + 15, this.y + 25 + this.mag) //b
        vertex(7 + this.x + 20, this.y + 25 + this.mag) //b3
        vertex(7 + this.x + 30, this.y + 20 + this.mag) //c
        vertex(7 + this.x + 35, this.y + 15 + this.mag) //d
        vertex(7 + this.x + 40, this.y + 10) //e
        endShape();
        push();
        noFill()
        beginShape();
        vertex(2 + this.x + 10, this.y - 5 - this.mag) //b2
        vertex(2 + this.x + 15, this.y - this.mag) //a
        vertex(2 + this.x + 18, this.y + 5 - this.mag) //center
        vertex(2 + this.x + 20, this.y + 10) //0
        vertex(2 + this.x + 18, this.y + 15 + this.mag) //center
        vertex(2 + this.x + 15, this.y + 20 + this.mag) //a
        vertex(2 + this.x + 10, this.y + 25 + this.mag) //b2
        endShape();
        pop();
        this.node1.show(this.x - 5, this.y);
        this.node2.show(this.x - 5, this.y + 20, 10);
        this.node3.show(this.x + 70, this.y + 10, 10);
        circle(this.x + 51, this.y + 10, 7);
    }
    update() {
        if (this.connected) {
            if (this.input1 && this.input2) {
                this.output = true;
            } else if (!this.input2 && !this.input1) {
                this.output = true;
            } else {
                this.output = false
            }
        } else {
            this.output = false;
        }
    }
}
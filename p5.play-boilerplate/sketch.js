const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
   sr1 = new Rectangle2(750,600,500,20);
   sr2 = new Rectangle2(1300,300,200,20);
   g1 = new Rectangle2(750,680,1500,20)

  p = new Circle(150,350,50);

   r1 = new Rectangle1(900,590,50,50);
   r2 = new Rectangle1(550,580,50,50);
   r3 = new Rectangle1(600,590,50,50);
   r4 = new Rectangle1(650,590,50,50);
   r5 = new Rectangle1(700,580,50,50);
   r6 = new Rectangle1(750,580,50,50);
   r7 = new Rectangle1(800,580,50,50);
   r8 = new Rectangle1(850,580,50,50);
   r9 = new Rectangle1(950,590,50,50);

   r10 = new Rectangle1(600,530,50,50);
   r11 = new Rectangle1(650,580,50,50);
   r12 = new Rectangle1(700,590,50,50);
   r13 = new Rectangle1(750,590,50,50);
   r14 = new Rectangle1(800,580,50,50);
   r15 = new Rectangle1(850,580,50,50);
   r16 = new Rectangle1(900,580,50,50);

   r17 = new Rectangle1(650,530,50,50);
   r18 = new Rectangle1(700,580,50,50);
   r19 = new Rectangle1(750,590,50,50);
   r20 = new Rectangle1(800,590,50,50);
   r21 = new Rectangle1(850,580,50,50);

   r22 = new Rectangle1(700,530,50,50);
   r23 = new Rectangle1(750,580,50,50);
   r24 = new Rectangle1(800,590,50,50);

   r25 = new Rectangle1(750,480,50,50);


   rb1 = new Rectangle1(1250,280,50,50);
   rb2 = new Rectangle1(1300,280,50,50);
   rb3 = new Rectangle1(1350,280,50,50);

   rb4 = new Rectangle1(1300,250,50,50);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();
  r7.display();
  r8.display();
  r9.display();

  r10.display();
  r11.display();
  r12.display();
  r13.display();
  r14.display();
  r15.display();
  r16.display();

  r17.display();
  r18.display();
  r19.display();
  r20.display();
  r21.display();

  r22.display();
  r23.display();
  r24.display();
  r25.display();

  rb1.display();
  rb2.display();
  rb3.display();
  rb4.display();

  p.display();

  g1.display();
  sr1.display();
  sr2.display(); 
  drawSprites();
}
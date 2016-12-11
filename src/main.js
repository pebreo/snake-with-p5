require('p5');

var sketch = function (p) {
  var gray = 0; 

  p.setup = function () {
    p.createCanvas(600, 400);
  };

  p.draw = function () {
    p.background(gray);
    p.rect(p.width/2, p.height/2, 200, 200);
  };

  p.mousePressed = function () {
    gray = (gray + 16) % 256;
  };
};

new p5(sketch);
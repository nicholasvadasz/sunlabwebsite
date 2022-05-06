import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  screenWidth: number;
  screenHeight: number;
  isMobile: boolean;
}

let angle = 0;
let t = 0;
let offset: number;
// let timer = 0;

const MySketch = (props: ComponentProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(props.screenWidth, props.screenHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.background(41, 61, 91);
    p5.noFill();
    // p5.stroke(255, 0);
    offset = p5.random(0.004, 0.01);
  };

  const draw = (p5: p5Types) => {
    p5.noFill();
    if (!props.isMobile) {
      p5.translate(0.2 * props.screenWidth, 0);
    }
    p5.stroke(242, 230, 197);
    p5.strokeWeight(0.1);
    p5.scale(p5.noise(t) * 2.5);
    p5.rotateX(angle);
    p5.rotateY(angle * p5.noise(offset + t));
    p5.rotateZ(t * t);
    p5.beginShape();
    for (var i = 0; i < 2 * Math.PI; i += 0.1) {
      let xx = 250 * Math.cos(i) + p5.noise(t * 0.1, i * 0.001) * 80;
      let yy = 250 * Math.sin(i) + p5.noise(t * 0.2, i * 0.001) * 80;
      p5.vertex(xx, yy, 0);
    }
    p5.endShape(p5.CLOSE);
    angle += 0.01;
    t += 0.002;
    // timer += 1 / 60;
    // if (timer >= 3) {
    //   p5.fill(41, 61, 91, 10);
    //   p5.rect(-960, -490, p5.width, p5.height);
    //   timer = 0;
    // }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MySketch;

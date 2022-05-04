import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {}

let x = 50;
const y = 50;

const MySketch = (props: ComponentProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.fill(255, 0, 0);
    p5.stroke(0);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.frameCount / 100);
    p5.ellipse(0, 0, 100, 50);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MySketch;

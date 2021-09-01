console.log("ON")

let strips = [];

let c = 6;
let w = 720, h = 900;
let bw = 75, bh = 40, bd = 100;
let pad = 20;
let t = 38;
let adj = 10;

function onload() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    console.log(vw.toString() + ", " + vh.toString());
}

function preload() {
    font = loadFont("Rajdhani-SemiBold.ttf")
}

function setup() {
    createCanvas(w, h, WEBGL);
    noStroke();
    textFont(font);
    textSize(t);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    smooth();

    for (let i = 0; i < c; i++) {
        let strip = {
            w: bw,
            h: bh * 10,
            d: bd,
            y: 0,
            z: 0,
            targety: 0
        };
        if (i < (c/2)) strip.x = - (bw + pad) * (c/2 -i - 0.5);
        else strip.x = + (bw + pad) * (-c/2 + i + 0.5);
        if (i % 2) strip.x -= adj; else strip.x += adj;
        strips.push(strip);
    }
}
  
function draw() {
    background(0);
    //orbitControl();
    ambientLight(50, 60, 60);
    pointLight(255, 255, 255, 0, 0, 400);

    let vals = [int(hour() / 10), hour() % 10, int(minute() / 10), minute() % 10, int(second() / 10), second() % 10];
    for (let i = 0; i < c; i++) {
        let strip = strips[i];
        strip.targety = (vals[i]-4.6) * bh;
        strip.y += (strip.targety - strip.y) / 2;

        push();
        translate(strip.x, strip.y - strip.h/2, strip.z);
        rotateX(PI / 2);
        cylinder(bw/2, bd);
        pop();

        push();
        translate(strip.x, strip.y + strip.h/2, strip.z);
        rotateX(PI / 2);
        cylinder(bw/2, bd);
        pop();

        push();
        fill(255);
        translate(strip.x, strip.y, strip.z);
        box(strip.w, strip.h, strip.d);
        translate(0, (-strip.h+bh)/2, strip.d/2+1);
        for (let j = 0; j < 10; j++) {
            if (9-j == vals[i]) {
                fill(0);
            } else {
                fill(0, 0, 0, 15);
            }
            text((9-j), 0, 0);
            translate(0, bh, 0);
        }
        pop();
    }
}
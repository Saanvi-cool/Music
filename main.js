function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(580, 120)
    webcam = createCapture(VIDEO);
    webcam.size(550, 500);
    posenet = ml5.poseNet(webcam, modelLoaded);
    posenet.on("pose", GetResults);
    background("white");
}
function draw() {
    background("white");
    fill("red");
    square(nose_x, nose_y, size);

}

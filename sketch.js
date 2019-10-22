let angle = 10

let paint_mode= false

let word = ""

function setup() {



	let canvas = createCanvas(1385, 300)
	canvas.parent("p5")

	fill(0, 0, 0)
	

	rect(0, 0, width, height)

	angleMode(DEGREES)

	fill(255, 0, 0, 100)

}

function draw() {


	

	//line(mouseX, mouseY, mouseX-10, mouseX-10)
	//line(mouseX, mouseY, mouseX+10, mouseY+10)

	if (paint_mode == true) {
	//arc(mouseX, mouseY, 50, 50, angle, angle+50)
	//angle += 1

	//line(0, 0, mouseX, mouseY)
	//line(width, 0, mouseX, mouseY)
	//line(height, width, mouseX, mouseY)
	//line(height, 0, mouseX, mouseY)

	textFont('Comic Sans MS');
	textSize(30)


	text(word, mouseX, mouseY) 

}

}


function mousePressed() {

	paint_mode = true 

}

function mouseReleased() {

	paint_mode = false
}

function mouseClicked() {


}

function colorBlue() {
	fill(0, 0, 225, 100)
	word = "moist"

}

function colorRed() {
	fill(255, 0, 0, 100)
	word = "dont"

}

function colorGreen() {
	fill(42, 193, 19)
	word = "uncomfortable"

}

function colorYellow() {
	fill(254, 251, 0)
	word = "but"
}

function colorPurple() {
	fill(154, 0, 254)
	word = "why"
}

function colorOrange() {
	fill(254, 135, 0)
	word = "I"
}

function colorDiamondblue() {
	fill(0, 254, 254)
	word = "the"
}

function colorSilver() {
	fill(189, 190, 189)
	word = "me"
}

function colorPink() {
	fill(251, 199, 202)
	word = "very"
}

function colorWhite() {
	fill(255, 255, 255)
	word = "word"
}

function colorBrown() {
	fill(128, 83, 38)
	word = "know"
}

function colorLightBlue() {
	fill(38, 121, 128)
	word = "feel"
}

function colorLightPurple() {
	fill(127, 38, 128)
	word = "makes"
}

window.addEventListener("load", main);

function main(event){
	var rects = [];
	for (i = 0; i<50; i++){
	var rect = randRect();
	factory("div", rect.x, rect.y, rect.w, rect.h);
	}
	console.log(rect);
}

function randRange(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}
function randomColor(){
	return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}
function hitTest(r1, r2){
	return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));
}
function randRect(x, y, w, h){
	return {x: randRange(0, document.body.clientWidth),
		y: randRange(0, 650),
		w: randRange(10, 200),
		h: randRange(10, 200)}
}

function factory(el, x, y, w, h){
	var element = document.createElement(el);
	element.style.position = "absolute";
	element.style.left = x + "px";
	element.style.top = y + "px";
	element.style.width = w + "px";
	element.style.height = h + "px";
	element.style.backgroundColor = randomColor();
	document.body.appendChild(element);
}

/* function yaCollision(r1, r2){
	hasLeftCollision = r1.x + r1.w >= r2.x;
	hasTopCollision = r1.x <= r2.x + r2.w;
	hasWidthCollision = r1.y + r1.h >= r2.y;
	hasHeightCollision = r1.y <= r2.y + r2.h;
	yaCollision = hasLeftCollision || hasTopCollision || hasWidthCollision || hasHeightCollision;
	if (yaCollision){
		console.log({
			hasLeftCollision, 
			hasTopCollision, 
			hasWidthCollision, 
			hasHeightCollision,
			})
	}else{
		console.log('pas de collisions')}
} */
			

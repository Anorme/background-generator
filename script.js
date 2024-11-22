const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient")
let displayGradient = document.querySelector('.displayGradient');
let currentGradient;
let randomBtn = document.querySelector('.js-random-btn');
loadGradient();

function renderGradient(color1,color2,displayArea){
		displayArea.style.background = 
		"linear-gradient(to right,"
		 + color1 
		 + "," 
		 + color2
		 + ")";
		 currentGradient = `linear-gradient(to right,${color1},${color2})`;
		 displayGradient.textContent = currentGradient + ";"
}

function loadGradient () {
	renderGradient(color1.value,color2.value,body);
}

function loadRandom () {
		let randomColor1 = getRandomHexColor();
		let randomColor2 = getRandomHexColor();
		renderGradient(randomColor1,randomColor2,body);
		renderGradient(randomColor1,randomColor2,randomBtn)
};

randomBtn.addEventListener("click",() => {
	loadRandom();
});
color1.addEventListener("input",loadGradient);
color2.addEventListener("input",loadGradient);

let getRandomHexColor = () => {
  // Define an array of hexadecimal digits
  let hexChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  // Generate an array of six random indices from 0 to 15
  const hexIndices = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16)
  );
  // Map each index to its corresponding hex digit and join them into a string
  const hexCode = hexIndices.map((i) => hexChars[i]).join('');
  // Return the string with a "#" prefix
  return `#${hexCode}`;
};

// const body = document.body;

// const customElement = document.querySelector(":root");

// document.addEventListener("click", (e) => {
// 	let snow = document.createElement("span");

// 	let snowPic = document.createElement("img");

// 	snowPic.src = "resources/assets/snow.png";

// 	let l = Math.random() * 61 + 25 + "px";

// 	snowPic.style.width = l;

// 	snowPic.style.height = l;

// 	snow.append(snowPic);

// 	snow.classList.add("snowFlake");

// 	snow.style.left = e.clientX + "px";

// 	snow.style.top = e.clientY + "px";

// 	customElement.style.setProperty("--Pos", `${e.clientY}px`);

// 	body.append(snow);

// 	setTimeout(() => {
// 		snow.style.opacity = 0;
// 		snow.remove();
// 	}, 2900);
// });

const body = document.body;

document.addEventListener("click", (e) => {
	let snow = document.createElement("span");

	let snowPic = document.createElement("img");

	snowPic.src = "resources/assets/snow.png";

	let l = Math.random() * (55 + 1) + 25 + "px";

	snowPic.style.width = l;

	snowPic.style.height = l;

	snow.append(snowPic);

	snow.classList.add("snowFlake");

	snow.style.position = "absolute";

	snow.style.backgroundImage = "snow.png";

	snow.style.backgroundSize = "cover";

	snow.style.left = e.clientX + "px";
	snow.style.top = e.clientY + "px";

	body.append(snow);

	setTimeout(() => {
		snow.style.opacity = 0;
		snow.remove();
	}, 2900);
});

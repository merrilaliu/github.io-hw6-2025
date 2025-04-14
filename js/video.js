var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
	});

	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function () {
		console.log("Slow Down Video");
		video.playbackRate *= 0.9;
		console.log("New Speed: " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function () {
		console.log("Speed Up Video");
		video.playbackRate /= 0.9;
		console.log("New speed:", video.playbackRate.toFixed(5));
	});

	document.querySelector("#skip").addEventListener("click", function () {
		console.log("Skip Ahead");
		video.currentTime = video.currentTime + 15;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("New location: " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function () {
		console.log("Mute Video");
		if (video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
		} else {
			video.muted = true;
			this.innerHTML = "Unmute";
		}
	});

	document.querySelector("#slider").addEventListener("click", function () {
		console.log("Change Volume");
		video.volume = this.value / 100;
		document.querySelector("#volume").innerText = `${this.value}%`;
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		console.log("Old School");
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		console.log("Original");
		video.classList.remove("oldSchool");
	});
});

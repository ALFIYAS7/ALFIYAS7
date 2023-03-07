function collectFingerprint() {
	var fingerprint = {};

	// Collect screen resolution
	fingerprint.screenResolution = window.screen.width + "x" + window.screen.height;

	// Collect installed plugins
	fingerprint.plugins = [];
	for (var i = 0; i < navigator.plugins.length; i++) {
	    fingerprint.plugins.push(navigator.plugins[i].name);
	}

	// Collect user agent string
	fingerprint.userAgent = navigator.userAgent;

	// Collect time zone offset
	fingerprint.timeZoneOffset = new Date().getTimezoneOffset();

	// Collect language preference
	fingerprint.language = navigator.language;

	// Collect canvas fingerprint
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var txt = "Browser fingerprint";
	ctx.textBaseline = "top";
	ctx.font = "14px 'Arial'";
	ctx.textBaseline = "alphabetic";
	ctx.fillStyle = "#f60";
	ctx.fillRect(125, 1, 62, 20);
	ctx.fillStyle = "#069";
	ctx.fillText(txt, 2, 15);
	ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
	ctx.fillText(txt, 4, 17);
	fingerprint.canvasFingerprint = canvas.toDataURL();

	// Return fingerprint object
	return fingerprint;
}

$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		alert("yes ready..");
		navigator.camera.getPicture(function cameraCallback(imageData) {
			alert("yes ready2..");
			var image = $(".dang");
			image.src = "data:image/jpeg;base64," + imageData;
		}, function cameraErr() {
		}, {
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
			});
	}
});
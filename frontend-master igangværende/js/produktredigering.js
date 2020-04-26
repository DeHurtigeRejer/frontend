function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			var output = document.getElementById('imgpreview');
			output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
	}
}
function buttonClick(n) {
	if ( n == 'yes' ) {
		document.getElementById('imgContainer').style.display = 'block';
	} else {
		document.getElementById('imgContainer').style.display = 'none';
		alert('You suck.');
		location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
	}
}
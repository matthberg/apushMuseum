window.onload(function(){
	let figures = document.getElementsByTagName('figure');
	for(figure in figures){
		figure.onclick = function(){
			figure.classList.remove('small');
			figure.classList.add('fill');
			figure.id = 'active';
		};
	}
});

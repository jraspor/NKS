var studenti_empty = {id_studenta : null, device : null, results : {}};

function startTest() {
	var id_studenta = document.getElementById("id_studenta").value;
	var rd1 = document.getElementById("rd1");
	var rd2 = document.getElementById("rd2");
	
	if(rd1.checked == true) {
		device = rd1.value;
	}
	else if(rd2.checked == true) {
		device = rd2.value;
	}
	console.log(id_studenta);
	console.log(device);
	
	window.location.href = "pocetak.html";
}
function doAjax(type, value, callback, isAsync) {
	if (isAsync == undefined) {
		isAsync = true;
	}
	var http = new XMLHttpRequest();
	var data = "?qt=" + type + '&v=' + encodeURI(value);

	http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//document.getElementById("spnUserInfo").innerHTML=this.responseText;
			var text = this.responseText;
			if (typeof callback == "function") {
				callback(text);
			} 
			//alert('Everything is Fine!');
		}
	}
	http.open('GET', 'test.php' + data, isAsync);
	http.send();
}

var btn = document.querySelector(".btn");
btn.addEventListener('click', ()=>{
    doAjax("null", "Fuck you", (text)=>{document.querySelector(".pp").textContent = text}, true);
});
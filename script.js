let btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
	 e.preventDefault();
	let name=document.getElementById("name");
	let year=document.getElementById("year");
	let url=document.getElementById("url");
	url.innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`;
})

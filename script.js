function MyFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа");
	function showSkills() {
		let skills = [' html', ' css', ' js'];
		

		for (let i = 0; i < skills.length; i++) {
			document.write('Я владею' + skills[i] + '<br>')  
		} // вместо document write лучше писать document.body.innerHTML=""; или += для записи каждого элемента массива
	}
	showSkills(); 
	 
	function checkAge() {
		if (age > 18){
			alert("Ура, тебе есть 18")
		}
		else {
			alert("Тебе еще нет 18, но ничего страшного")
		}
	}
	checkAge();

 
	function calcPow(num) {
		console.log(num * num)
	}
	calcPow(4)

}

MyFirstApp("Masha", 20);
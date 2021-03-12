
function Retangulo(altura, largura) {
	this.altura = altura;
	this.largura = largura;
	this.area = area;
	this.perimetro = perimetro;
}

function area() {
	return this.altura * this.largura;
}

function perimetro() {
	return this.altura * 2 + this.largura * 2;
}

function Person(first, last, age, gender, job) {
	this.name = {
		'first': first, 
		'last': last
	};

	this.age = age; 
	this.gender = gender; 
	this.job = job; 

	this.bio = function() {
		console.log(this.name.first+' '+this.name.last+' is '+this.age+' years old. He is a '+this.job);
	}

	this.greeting = function() {
		console.log("Hi! I'm "+this.name.first+".");
	}

}
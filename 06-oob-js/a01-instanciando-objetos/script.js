
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
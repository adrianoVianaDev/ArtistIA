
function refresh(){
	window.location.reload(50000);
}

function gerarQuadro(){

	var randomColorFundo = (Math.floor(Math.random()*16777215)).toString(16);

	var corFundoQuadro = document.getElementById("tela");

	corFundoQuadro.setAttribute(
		'style',
		  //'background-color: #'+randomColorFundo+';'
		 'background-color: rgb(' + 
		    (Math.floor(Math.random()*56)+200) + ', ' +
		    (Math.floor(Math.random()*56)+200) + ', ' +
		    (Math.floor(Math.random()*56)+200) +
		    ');'
	);

	var qntElementos = Math.ceil(Math.random()*100);

	for (var i = 0; i < qntElementos; i++){
		var tipoElemento = Math.ceil(Math.random()*5);

		if (tipoElemento == 1) {
			gerarQuadrado();
		}
		else if (tipoElemento == 2){
			gerarCirculo();
		}
		else if (tipoElemento == 3){
			gerarLinha();
		}
		/*else if (tipoElemento == 3){
			gerarTexto();
		}*/
		else if (tipoElemento == 4){
			gerarEsfera();
		}
	}
}


function gerarQuadrado() {
	var posicaoAleatoriaX = Math.random()*(document.getElementById("tela").width);
	var posicaoAleatoriaY = Math.random()*(document.getElementById("tela").height);

	var randomSizeX = Math.random()*400;
	var randomSizeY = Math.random()*400;

	var c = document.getElementById("tela");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.rect(posicaoAleatoriaX, posicaoAleatoriaY, randomSizeX, randomSizeY);

	ctx.stroke();
}

function gerarCirculo() {
	var posicaoAleatoriaX = Math.random()*(document.getElementById("tela").width);
	var posicaoAleatoriaY = Math.random()*(document.getElementById("tela").height);

	var randomSize = Math.random()*400;

	var c = document.getElementById("tela");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(posicaoAleatoriaX, posicaoAleatoriaY, randomSize, 0, 2 * Math.PI);

	/*TESTE DISTORÇÃO*/
	var randomDistorcao = Math.random();
	var randomDistorcao2 = Math.random();
	//ctx.setTransform (1, -0.2, 0, 1, 0, 0);
	ctx.setTransform (1, -1*(randomDistorcao), randomDistorcao2, 1, 0, 0);


	ctx.stroke();
}

function gerarLinha() {
	var posicaoAleatoriaInicialX = Math.ceil(Math.random()*(document.getElementById("tela").width));
	var posicaoAleatoriaInicialY =  Math.ceil(Math.random()*(document.getElementById("tela").height));

	var posicaoAleatoriaFinalX = Math.ceil(Math.random()*(document.getElementById("tela").width));
	var posicaoAleatoriaFinalY =  Math.ceil(Math.random()*(document.getElementById("tela").height));

	var randomColor = Math.floor(Math.random()*16777215);

	var c = document.getElementById("tela");
	var ctx = c.getContext("2d");
	ctx.moveTo(posicaoAleatoriaInicialX, posicaoAleatoriaInicialY);
	ctx.lineTo(posicaoAleatoriaFinalX, posicaoAleatoriaFinalY);
	ctx.strokeStyle = "#"+randomColor;
	ctx.stroke();
}

/*function gerarTexto() { //Opção de gerar texto na imagem
	var posicaoAleatoriaX = Math.random()*(document.getElementById("tela").width);
	var posicaoAleatoriaY = Math.random()*(document.getElementById("tela").height);

	var c = document.getElementById("tela");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.strokeText("Hello World", posicaoAleatoriaX, posicaoAleatoriaY);
}*/

function gerarEsfera() {
	var posicaoAleatoriaX = Math.random()*(document.getElementById("tela").width);
	var posicaoAleatoriaY = Math.random()*(document.getElementById("tela").height);

	var randomColor = Math.floor(Math.random()*16777215);

	var randomSize = Math.random()*150;

	console.log(randomColor);

	var c = document.getElementById("tela");
	var ctx = c.getContext("2d");


	ctx.beginPath();
	ctx.fillStyle = "#"+randomColor;


	ctx.arc(posicaoAleatoriaX, posicaoAleatoriaY, randomSize, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
}

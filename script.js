var contentbody = document.querySelector('.content-body');
var btnamora = document.querySelector('.btnamora');
var btnvoltar = document.querySelector('.btnvoltar');
var baloes = document.querySelector('.baloes-full');
var topo = document.querySelector('.top');
var titulo = document.querySelector('.titulo');

var data = new Date();
var dia = data.getDate();
var mesStr = new Array(
  'Janeiro','Fevereiro', 'Março', 
  'Abril', 'Maio', 'Junho', 
  'Julho', 'Agosto', 'Setembro', 
  'Outubro', 'Novembro', 'Dezembro'
)
var mes = data.getMonth();
var ano = data.getFullYear();

titulo.innerHTML = "Aos " + dia + " de " + mesStr[(mes)] + " de " + ano;

btnvoltar.addEventListener('click', function () {
  contentbody.classList.toggle('mostrar');
  baloes.style.visibility = 'visible';
  topo.style.visibility = 'visible';
  btnamora.style.visibility = 'visible';
})
btnamora.addEventListener('click', function () {  
  contentbody.classList.toggle('mostrar');  
  baloes.style.visibility = 'hidden';
  topo.style.visibility = 'hidden';
  btnamora.style.visibility = 'hidden';
});

/*function mostrarVideo() {
  document.getElementsByTagName("iframe")[0].style.display = "block";
  document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/FKLtgamrhpk";
  document.doctype.remove(); // remove o DOCTYPE
}*/

function mostrarVideo() {
  // Encontre o iframe do vídeo usando o ID e guarde-o em uma variável
  var video = document.getElementById("meuVideo");
  
  // Adicione a classe "visivel" ao iframe do vídeo para torná-lo visível
  video.classList.add("visivel");
}




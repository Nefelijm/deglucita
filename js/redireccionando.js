$(document).ready(function() {
  var $btnInformation = $('.btn-information');
  var $logo = $('.logo');
  var $behind = $('.behind');
  var $behind2 = $('.behind2');
  var $iconProlife = $('.icon-prolife');
  var $btnReceta = $('.btn-receta');
  var $btnVideos = $('.btn-videos');
  var $btnPhotoRedirecciona = $('.btn-photo-redirecciona');
  // Evento al btn información, que me redirecciona al form para agregar tus datos
  $btnInformation.on('click', function(e) {
    $(location).attr('href', 'information.html');
  });
  // Evento al bnt recetas, que me redirecciona a la vista de recetas
  $btnReceta.on('click', function(e) {
    $(location).attr('href', 'recipe.html');
  });
  // Evento al bnt videos, que me redirecciona a la vista de videos
  $btnVideos.on('click', function(e) {
    $(location).attr('href', 'videos.html');
  });
  // Evento al logo y atrás del prolife y del personalInformation, que me redirecciona a la vista homepage
  $logo.on('click', function(e) {
    $(location).attr('href', 'homepage.html');
  });
  $behind.on('click', function(e) {
    $(location).attr('href', 'homepage2.html');
  });
  $behind2.on('click', function(e) {
    $(location).attr('href', 'prolife.html');
  });
  // Evento al icon person, para que redireccione a la vista prolife
  $iconProlife.on('click', function(e) {
    $(location).attr('href', 'prolife2.html');
  });

  // Evento click del carrusel FOTOS
  $btnPhotoRedirecciona.on('click', function(e) {
    $(location).attr('href', 'photo.html');
  });
});

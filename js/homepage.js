$(document).ready(function() {
  var $btnPhoto = $('.btn-photo');
  var $btnReceta = $('.btn-recipe');
  var $BtnToPost = $('.btn-to-post');
  var $textarea = $('.textarea');
  var $imgPost = $('#img2');
  var $nameRecipe = $('.name-recipe');

  // Función para llamar y ocultar form para postear imágenes/videos
  $btnPhoto.on('click', function(e) {
    var $modal = $('.photo');
    $('.recipe').hide();
    $('.photo').show();
  });

  // Función para llamar y ocultar form para postear recetas
  $btnReceta.on('click', function(e) {
    var $modal2 = $('.recipe');
    $('.photo').hide();
    $('.recipe').show();
  });

  // Función para agregar color al textarea y habilitar botón
  $textarea.on('keyup', function(e) {
    var $val = $(this).val();
    var $text = $(this).val().length;
    if ($text > 0) {
      $(this).css('color', 'pink');
      $('.btn-to-post').removeAttr('disabled');
    }
  });

  // Función para que el contenido escrito en el modal se agregue en la sección de notificaciones
  $BtnToPost.on('click', function(e) {
    console.log('click');
    event.preventDefault();
    var $name = $('.add-post-name').prepend($nameRecipe.val());    
    var $img = $('.add-post-img').prepend($imgPost.val());
    var $recipe = $('.add-post-content').prepend($textarea.val());

    // $('.modal-post').hide();
  });

  // Función para que el contenido de la imagen
  $('.preview').hover(
    function() {
      $(this).find('a').fadeIn();
    }, function() {
      $(this).find('a').fadeOut();
    }
  );
  
  $('.file-select').on('click', function(e) {
    e.preventDefault();
    var dato = $(this).attr('datafile');
    var fileinfo = $(this).attr('datafileinfo');
    var dataimage = $(this).attr('dataimg');
    $(dato).click();
    $(dato).change(function() {
      var file = (this.files[0].name).toString();
      var reader = new FileReader();

      $(fileinfo).text('');
      $(fileinfo).text(file);

      reader.onload = function(e) {
        $(dataimage).attr('src', e.target.result);
      };

      reader.readAsDataURL(this.files[0]);
    });
  });

  /* funcion para subir la imagen*/
  $('#preview').hover(function() {
    $(this).find('a').fadeIn();
  }, function() {
    $(this).find('a').fadeOut();
  });
  $('#file-select').on('click', function(event) {
    event.preventDefault();
    $('#file').click();
  });

  $('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    console.log(file);
    var reader = new FileReader();
    $('#file-info').text('');
    $('#file-info').text(file);
    reader.onload = function(event) {
      var newim = $('#preview img').attr('src', event.target.result);
      $('#imagen').append('<img src=\'' + event.target.result + '\'/>');
      $('#imagen img').addClass('box-img');
      console.log(newim);
    };
    /* muestra la imagen*/
    reader.readAsDataURL(this.files[0]);
  });

  $('#file-save').click(function() {

  });
});

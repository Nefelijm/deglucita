$(document).ready(function() {
  var $btnInformation = $('.btn-information');
  var $input = $('.input');
  // Función para activar btn
  $input.on('keyup', function(e) {
    var $val = $(this).val();
    var $text = $(this).val().length;
    if ($text > 0) {
      $('.btn-information').removeAttr('disabled');
    }
  });
  // Función para agregar los datos d ela información en el perfil
  $btnInformation.on('click', function(e) {
    console.log('click');
    e.preventDefault();
    var $nameInf = $('.name-inf').val();
    var $nationalInf = $('.national-inf').val();
    var $specialtyInf = $('.specialty-inf').val();
    var $ageInf = $('.age-inf').val();
    var $studiesInf = $('.studies-inf').val();


    localStorage.name = $nameInf;
    localStorage.age = $ageInf;
    localStorage.national = $nationalInf;
    localStorage.studies = $studiesInf;
    localStorage.speciality = $specialtyInf;
    window.location.href = '../views/prolife2.html';
    /* var $infName = $('.information-name').prepend($nameInf.val());
    var $infNational = $('.information-national').prepend($nationalInf.val());
    var $infSpecialty = $('.information-specialty').prepend($specialtyInf.val());
    var $infAge = $('.information-age').prepend($ageInf.val());
    var $infStudies = $('.information-studies').prepend($studiesInf.val());
    $(location).attr('href', 'prolife.html');*/
  });
});

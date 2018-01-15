$(document).ready(function () {

 //Funciones para elegir las resgistrarse o iniciar sesion
    $('#change1').click(function () {
      $('#btnSign').removeClass("hide");
      $('#btnLogin').addClass("hide");
      
    });
  $('#change2').click(function () {
    $('#btnSign').addClass("hide");
    $('#btnLogin').removeClass("hide");

  });
  // Creando variables booleanas que nos ayudaran 
  var verifyemail = false;
  var verifyPassword = false;

  function activeButton() {
    if (verifyemail && verifyPassword) {
      $('#btnLogin').attr('disabled', false);
      $('#btnSign').attr('disabled', false);
    }
  }

  function desactiveButton() {
    if (verifyemail && verifyPassword) {
      $('#btnLogin').attr('disabled', true);
      $('#btnSign').attr('disabled', true);
    }
  }      

  // Funcion para validar el input de email
  $('#textEmail').on('input', function () {
    var parameterEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/); // Expresiones regulares que nos ayudara a validar el email
    if (parameterEmail.test($(this).val()) === false || $(this).val() === '') {
      $('#msj1').text('Ingrese su correo correcto');
      desactiveButton();
      return false;
    } else {
      $('#msj1').text('');
      verifyemail = true;
      activeButton();
    }
  });

  // validando el Input de password
  $('#textPassword').on('input', function (event) {
    if ($(this).val().length < 6 || $(this).val() === '') {
      $('#msj2').text('Ingrese una contraseña mayor a 6 digitos');
      desactiveButton();
      return false;
    } else {
      $('#msj2').text('');
      verifyPassword = true;
      activeButton();
    }
  });


  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAlbcybJZDOmr_rLwWDzAnarW7U23C8ZyI',
    authDomain: 'deglu-producto.firebaseapp.com',
    databaseURL: 'https://deglu-producto.firebaseio.com',
    projectId: 'deglu-producto',
    storageBucket: '',
    messagingSenderId: '926786399247'
  };
  firebase.initializeApp(config);

  // Obteniendo todo los elementos del DOM

  var email = $('#textEmail');
  var password = $('#textPassword');
  var login = $('#btnLogin');
  var sign = $('#btnSign');
  var logout = $('#btnLogout');

  // Evento click para obtener los valores de los inputs

  $('#btnLogin').on('click', e => {
    e.preventDefault();
    var emailLogin = email.val();
    console.log(emailLogin);
    var passwordLogin = password.val();
    var auth = firebase.auth();
    // Hacemos el metodo de identficacion 
    var promise = auth.signInWithEmailAndPassword(emailLogin, passwordLogin);
    promise.catch(e => console.log(e.message));  

  });

  // Evento click para registrar usuario
  $('#btnSign').on('click', e => {
    e.preventDefault();
    var emailLogin = email.val();
    var passwordLogin = password.val();
    var auth = firebase.auth();
    // Hacemos el metodo de identficacion 
    var promise = auth.createUserWithEmailAndPassword(emailLogin, passwordLogin);
    promise.catch(e => console.log(e.message));
  
  });

  $('#btnLogout').on('click', e => {
    e.preventDefault();
    window.location.href = '../views/perfil.html'
   
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
      
    } else {
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });

  $()


});
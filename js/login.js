$(document).ready(function () {
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
    firebase.auth().signOut();
    window.location.href = '../views/homepage.html';
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
});
$(document).ready(function() {

  $('.information-name').text(localStorage.name);
  $('.information-age').text(localStorage.age);
  $('.information-national').text(localStorage.national);
  $('.information-studies').text(localStorage.studies);
  $('.information-specialty').text(localStorage.speciality);

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

  // podemos traer el  email automaticamente 
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      var userCode = user.uid;
      // cambio
      $('#name').text(email);

      // cambio
      console.log(userCode);
    }
  });
});

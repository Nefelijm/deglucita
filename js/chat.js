$(document).ready(function() {
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
  var Nombre = prompt('Nombre:');

  // creamos una variable para acceder  alos datos
  var baseDatos = firebase.database().ref('chat');
  // llamamos los mensajes de la base de datos y le colocamos en el chat
  baseDatos.on('value', function(snapshot) {
  
    
    // leer todos los mensajes en firebase
    snapshot.forEach(function(e) {
      var objeto = e.val(); // Agragando valores a un objeto

      if ((objeto.Mensaje ) && (objeto.Nombre )) {
        $('#plantilla').clone().appendTo('.chat');
        $('.chat #plantilla').show(10);
        $('.Nombre').html(objeto.Nombre);
        $('.Mensaje').html(objeto.Mensaje);
        $('.Tiempo').html(objeto.Fecha);
        $('.chat #plantilla').attr('id', '');
      }
    });
  });

  $('#btn-chat').click(function() {
    var formatofecha = new Date();
    var d = formatofecha.getUTCDate();
    var m = formatofecha.getMonth();
    var y = formatofecha.getFullYear();
    var h = formatofecha.getHours();
    var min = formatofecha.getMinutes();

    Fecha = d + '/' + m + '/' + y + '' + h + ':' + min;

    baseDatos.push({
      Nombre: Nombre,
      Mensaje: $('#Mensaje').val(),
      Fecha: Fecha    
    });
  });
});
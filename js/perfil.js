$(document).ready(function () {

    //podemos traer el  email automaticamente 
    firebase.auth().onAuthStateChanged(function (user) {
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
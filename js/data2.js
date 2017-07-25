$( document ).ready(function() {
  "use strict";
  $('.cont').click(function() {
    $(".enviar").click();
  });
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1K8MD0kErN7_1yHz8UyDcReKTQK5VESo",
    authDomain: "panel-e957f.firebaseapp.com",
    databaseURL: "https://panel-e957f.firebaseio.com",
    projectId: "panel-e957f",
    storageBucket: "",
    messagingSenderId: "800679341255"
  };
  firebase.initializeApp(config);

    var vista2 = firebase.database().ref().child('vista2');



    function Data(){

    }
    var vista2Ref = firebase.database().ref().child('vista2');
    vista2Ref.set({
      titulos: {
        "titulo": "Construimos Tu Futuro",
        "titulo2": "Nuestros Servicios",
        "titulo3": "Nuestros Equipo",
        "titulo4": "Nuestros Proyectos"
      },
    vista1.once('value', function(snap) {

    });
